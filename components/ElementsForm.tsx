"use client"


import { useEffect, useState } from 'react';
import type { StripeError } from "@stripe/stripe-js";
import { useCart } from '../app/context/CartContext';
import * as React from "react";
import {
    useStripe,
    useElements,
    PaymentElement,
    Elements,
} from "@stripe/react-stripe-js";

import getStripe from "@/utils/get-stripejs";
import { createPaymentIntent } from "@/actions/stripe";

interface PersonalInfo {
    address: string;
    email: string;
    fname: string;
    lname: string;
    phone: string;
}

interface CheckoutFormProps {
    personal: PersonalInfo;
}




function CheckoutForm({ subtotal,  personal, cart, finalTotal, delivery, code }: { subtotal: any;  personal: PersonalInfo; cart: any[]; finalTotal: any; delivery: any; code: any }): JSX.Element {

    const [paymentType, setPaymentType] = React.useState<string>("");
    const [payment, setPayment] = React.useState<{
        status: "initial" | "processing" | "error";
    }>({ status: "initial" });
    const [errorMessage, setErrorMessage] = React.useState<string>("");

    const stripe = useStripe();
    const elements = useElements();



    const PaymentStatus = ({ status }: { status: string }) => {
        switch (status) {
            case "processing":
            case "requires_payment_method":
            case "requires_confirmation":
                return <h2 className='myBlack'>Processing...</h2>;

            case "requires_action":
                return <h2 className='myBlack'>Authenticating...</h2>;

            case "succeeded":
                return <h6 className='myBlack'>Payment Succeeded! </h6>;

            case "error":
                return (
                    <>
                        <p className="error-message myBlack">{errorMessage}</p>
                    </>
                );

            default:
                return null;
        }
    };





    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        // STEP 1: Validate Inputs
        if (!validateInputs(personal)) {
            setErrorMessage('Please fill the required fields and on the right format.');
            setPayment({ status: "error" });
            return;
        }

        // STEP 2: Ensure Stripe Elements Loaded
        if (!elements || !stripe) {
            setErrorMessage('Stripe elements are not available.');
            return;
        }

        setPayment({ status: "processing" });
        const { error: submitError } = await elements.submit();
        if (submitError) {
            setPayment({ status: "error" });
            setErrorMessage(submitError.message ?? "An unknown error occurred");
            return;
        }

        try {
            // STEP 3: Create Order (patches stock, sends order/email)
            const createOrder = async () => {
                try {
                    for (const item of cart) {
                        const quantityToDecrease = parseInt(item.quantity, 10);

                        let url;
                        let body;

                        if (item.type === "single") {
                            url = `/api/stock/${item._id}`;
                            body = { qty: quantityToDecrease };
                        } else if (item.type === "collection" && item.selectedSize) {
                            url = `/api/stock2/${item._id}`;
                            body = {
                                id: item._id,
                                qty: quantityToDecrease,
                                color: item.selectedColor,
                                size: item.selectedSize,
                            };
                        } else {
                            url = `/api/stock1/${item._id}`;
                            body = {
                                id: item._id,
                                color: item.selectedColor,
                                qty: quantityToDecrease,
                            };
                        }

                        const response = await fetch(url, {
                            method: "PATCH",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(body),
                        });

                        if (!response.ok) {
                            const result = await response.json();
                            throw new Error(result.error || "Failed to update stock");
                        }
                    }

                    // STEP 3.1 Save Order
                    const orderResponse = await fetch("/api/sendOrder", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ items: cart, inputs: personal, total: finalTotal, delivery, code }),
                    });
                    if (!orderResponse.ok) {
                        throw new Error("Failed to create order");
                    }

                    // STEP 3.2 Email Order
                    const emailResponse = await fetch("/api/sendEmail3", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ items: cart, inputs: personal, subtotal, delivery, total: finalTotal }),
                    });
                    if (!emailResponse.ok) {
                        throw new Error("Failed to send email");
                    }

                } catch (error: any) {
                    console.error("Error processing order:", error);
                    alert(error.message || "Something went wrong");
                    throw error;
                }
            };
            await createOrder();


            localStorage.setItem("personal", JSON.stringify(personal));
            localStorage.setItem("finalTotal", finalTotal);
            localStorage.setItem("delivery", delivery);
            localStorage.setItem("code", code); 
            localStorage.setItem("subtotal", subtotal); 


            // STEP 4: Stripe Payment Intent
            const { client_secret: clientSecret } = await createPaymentIntent(finalTotal);
            const { error: confirmError } = await stripe.confirmPayment({
                elements,
                clientSecret,
                confirmParams: {
                    return_url: "http://localhost:3000/done",
                    payment_method_data: {
                        billing_details: {
                            name: "Customer",
                        },
                    },
                },
            });
            if (confirmError) {
                setPayment({ status: "error" });
                setErrorMessage(confirmError.message ?? "An unknown error occurred");
                return;
            }

 

            alert("Order placed successfully!");
            setErrorMessage('');
            setPayment({ status: "success" });

        } catch (err) {
            const { message } = err as StripeError;
            setPayment({ status: "error" });
            setErrorMessage(message ?? "An unknown error occurred");
        }
    };



 

    const validateInputs = (inputs) => {
        const { country, city, address, fname, lname, phone, email } = inputs;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return (
            country &&
            city &&
            address &&
            fname &&
            lname &&
            phone &&
            email &&
            emailRegex.test(email)
        );
    };



    return (
        <>
            <form onSubmit={handleSubmit}>

                <fieldset className="elements-style">
                    <legend>Your payment details:</legend>

                    <div className="FormRow elements-style">
                        <PaymentElement
                            onChange={(e) => {
                                setPaymentType(e.value.type);
                            }}
                        />
                    </div>
                </fieldset>
                <button
                    className='w-full p-3 mt-4 text-black rounded-md myBlack mb-20'
                    style={{ background: "#dbc0d3" }}
                    type="submit"
                    disabled={
                        !["initial", "succeeded", "error"].includes(payment.status) ||
                        !stripe
                    }
                >
                    PAY NOW!
                </button>
            </form>
            <PaymentStatus status={payment.status} />
        </>
    );
}

export default function ElementsForm({ personal, finalTotal, delivery, code }: { personal: any; finalTotal: any; delivery: any; code: any; }): JSX.Element {

    const { cart, clearCart, subtotal } = useCart();



    useEffect(() => {
        console.log("personal:", personal);
        console.log("item:", cart);
    }, [personal, cart]);

    return (
        <Elements
            stripe={getStripe()}
            options={{
                appearance: {
                    variables: {
                        colorIcon: "#6772e5",
                        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                    },
                },
                currency: "usd",
                mode: "payment",
                amount: finalTotal * 100
            }}
        >
            <CheckoutForm subtotal={subtotal} clearCart={clearCart} personal={personal} cart={cart} delivery={delivery} finalTotal={finalTotal} code={code} />
        </Elements>

    );
}