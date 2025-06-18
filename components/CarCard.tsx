"use client";

import { TempProps } from "../types"; 

interface CarCardProps {
    temp: TempProps;
}

const CarCard = ({ temp }: CarCardProps) => {
    const { _id, title, price, img, stock, type, color } = temp;

    return (
        <a href={`/product?id=${_id}`} >
            <div className="br_grid br_grid-cols-1 supports-subgrid:br_row-span-4 supports-subgrid:br_grid-rows-[subgrid]">
                <div className="Layout br_contents">
                    <center>
                        <span className="br_contents br_edition-">
                            <div className="">
                                <div className="initial:br_row-span-1 br_col-start-1 br_row-start-1 br_relative">
                                    <div className="br_aspect-[1/1] sm:br_aspect-square">
                                        <div className="br_w-full br_h-full br_relative br_flex br_items-center br_justify-center"> 

                                            <div className="relative inline-block w-[150px] h-[150px]">
                                                <img
                                                    src={img[0]}
                                                    alt="Default"
                                                    className="w-full h-full object-cover object-center rounded"
                                                />

                                                {(
                                                    (type === 'single' && parseInt(stock) === 0) ||
                                                    (type === 'collection' &&
                                                        color?.every(color =>
                                                            color.sizes?.every(size => parseInt(size.qty) === 0)
                                                        )
                                                    )
                                                ) && (
                                                        <div className="absolute inset-0 bg-gray-600 bg-opacity-70 text-white flex items-center justify-center text-lg font-bold z-10 rounded">
                                                            Out of Stock
                                                        </div>
                                                    )}

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="text-center flex flex-col items-left justify-center px-3">
                                    <h3 style={{ height: "100px" }} className="text-left">
                                        <a href={`/product?id=${_id}`} className="text-current no-underline">
                                            <h2 className="text-sm font-bold myGray py-1">{title}</h2>
                                            <div className="price-container inline-flex flex-wrap gap-x-2 items-baseline justify-left text-white">
                                                <span className="font-bold text-[13px] py-1  myBlack">
                                                    ${parseFloat(price).toFixed(2)}
                                                </span> 
                                            </div>
                                        </a>
                                    </h3>
                                </div>

                            </div>
                        </span>
                    </center>
                </div>
            </div>
        </a>
    );
}

export default CarCard;
