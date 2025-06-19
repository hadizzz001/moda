"use client"
import { useState, useEffect } from "react";
import Cart from "./Cart"
import { useBooleanValue } from '../app/context/CartBoolContext';
import { useCart } from '../app/context/CartContext';
import clsx from 'clsx';
import { useFavorites } from '../app/context/FavContext';
import Fav from "../components/Fav"





function NavBar() {

  const [isActive, setIsActive] = useState(true);
  const { isBooleanValue, setBooleanValue } = useBooleanValue();
  const [isActive2, setIsActive2] = useState(true);
  const { cart } = useCart();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();





  const handleClick = () => {
    var d = document.getElementById("myUniD");
    var d1 = document.getElementById("hamburger3");
    setIsActive(!isActive);
    if (d && d1) {
      if (isActive) {
        d.className += " drawer-active br_open";
        d1.className += " open";
      }
      else {
        d.classList.remove("drawer-active");
        d.classList.remove("br_open");
        d1.classList.remove("open");
      }
    }
    // setIsActive(current => !current);
  };



  const handleClickc = () => {
    var cartb = document.getElementById("cartid");
    var cartb2 = document.getElementById("cartid2");
    setBooleanValue(!isBooleanValue);
    if (cartb && cartb2) {
      if (isBooleanValue) {
        cartb2.className += " MiniCart_Cart-visible";
      }
      else {
        cartb2.classList.remove("MiniCart_Cart-visible");
      }
    }
  };


  const handleClickc2 = () => {
    var search = document.getElementById("search-menu-overlay");
    var searchc = document.getElementById("search-menu-overlay");
    setIsActive2(!isActive2);
    if (search && searchc) {
      if (isActive2) {
        search.className += " open";
      }
      else {
        search.classList.remove("open");
      }
    }
  };


  const handleClickf = () => {
    var cartb = document.getElementById("favid");
    var cartb2 = document.getElementById("favid2");
    setBooleanValue(!isBooleanValue);
    if (cartb && cartb2) {
      if (isBooleanValue) {
        cartb2.className += " MiniCart_Cart-visible";
      }
      else {
        cartb2.classList.remove("MiniCart_Cart-visible");
      }
    }
  };







  return (
    <>



      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            'html,body{margin:0;padding:0}#topBannerWrapper{position:relative}#topBannerWrapper>a,.topBannerRotating>a{display:block;text-decoration:none;text-align:center}.topBannerRotating{min-height:30px;background-color:#fff}.topBannerRotating .topBanner{position:absolute;width:100%;height:100%;animation-timing-function:ease-in-out;animation-iteration-count:infinite;z-index:1;opacity:0;display:flex;justify-content:center;align-items:center}.topBanner{font-family:Lato, sans-serif;-webkit-font-smoothing:antialiased;background-color:#fff;color:#cecdca;position:relative;height:auto;overflow:hidden}.topBanner_Close{display:block;border:none;background:none;position:absolute;top:50%;right:0;height:32px;width:32px;cursor:pointer;z-index:2;transform:translateY(-50%)}.topBanner_Close:before,.topBanner_Close:after{position:absolute;display:block;content:" ";width:18px;height:1px;background-color:#fff;top:50%;left:50%}.topBanner_Close:before{transform:translate(-50%, -50%) rotate(45deg)}.topBanner_Close:after{transform:translate(-50%, -50%) rotate(-45deg)}.topBanner_Inner{display:flex}.topBanner_Inner_Icon{position:absolute;top:50%;left:5px;transform:translateY(-50%);padding:0 4px;display:flex;flex-direction:column;justify-content:center}.topBanner_Inner_Icon svg{height:24px;width:auto;max-width:24px;max-height:24px}.topBanner_Inner_Title{padding:0 5px}.topBanner_Inner_Cta{text-transform:uppercase;letter-spacing:1px;color:#000000;font-weight:bold}.topBanner_Inner{box-sizing:border-box;flex:1 1 auto;display:flex;flex-direction:row;justify-content:center;align-items:center;text-align:center;margin:0 42px;font-size:12px;font-weight:bold;line-height:18px;padding:6px 0;letter-spacing:1px}@media (min-width: 768px){.topBanner_Inner{display:flex;justify-content:center}.topBanner_Inner_Icon{position:static;top:auto;left:auto;transform:none;padding:0 4px;flex:0 1 auto}.topBanner_Inner{flex:0 1 auto;margin:0 20px;font-size:13px;line-height:18px;padding:6px 0}}@keyframes rotate--2{0%,50%,100%{opacity:0;z-index:1}3%,47%{opacity:1;z-index:2}}@keyframes rotate--3{0%,34%,100%{opacity:0;z-index:1}2%,32%{opacity:1;z-index:2}}.topBannerRotating--2 .topBanner{animation-name:rotate--2;animation-duration:6.8s}.topBannerRotating--3 .topBanner{animation-name:rotate--3;animation-duration:10.2s}.topBannerRotating .topBanner:nth-child(1){animation-delay:0s}.topBannerRotating .topBanner:nth-child(2){animation-delay:3.4s}.topBannerRotating .topBanner:nth-child(3){animation-delay:6.8s}\n'
        }}
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            'body{overflow-x:hidden}body.drawer-open{overflow:hidden}.MiniCart{top:80px}.pageHeaderMenuPreHeader{z-index:51}.pageHeaderMenuOverlays{z-index:52;position:relative;height:0}.pageHeaderMenuOverlay{position:absolute;top:0;left:0;right:0;height:124px;background:#efefef;display:none}.pageHeaderMenuOverlay.open{display:block}.pageHeaderMenuOverlay__close{border:none;background-color:#fff;color:#ccc;width:32px;height:32px;padding:0;margin:0;position:absolute;right:0;top:0;outline:none;cursor:pointer;z-index:1}.pageHeaderMenuOverlay__close::before,.pageHeaderMenuOverlay__close::after{position:absolute;display:block;content:" ";width:18px;height:1px;background-color:#fff;top:50%;left:50%}.pageHeaderMenuOverlay__close::before{transform:translate(-50%, -50%) rotate(45deg)}.pageHeaderMenuOverlay__close::after{transform:translate(-50%, -50%) rotate(-45deg)}.pageHeaderMenuOverlay__close:hover{background-color:#000000}.searchOverlay{width:80%;position:absolute;left:50%;top:48%;transform:translate(-50%, -50%)}.searchOverlay button{position:absolute;left:0;top:58%;border:0;background:transparent;outline:none;transform:translateY(-50%)}.searchOverlay button svg{height:32px;fill:#888}.searchInputWrapper{display:block;position:relative;height:45px;left:60px;right:0;width:90%}.searchInputWrapper input[type="text"],.searchInputWrapper__underline{position:absolute;font-family:Lato, sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;letter-spacing:.5px;position:absolute;font-size:28px;font-weight:300;height:45px;line-height:45px}.searchInputWrapper input[type="text"]{width:100%;outline:none;background:transparent;border:0;color:#fff;z-index:3;padding:0}.searchInputWrapper__underline{border-bottom:2px solid #000000;color:transparent;z-index:2}.newsletterOverlay{width:768px;margin:0;height:100%;position:relative;display:flex;flex-direction:column}.newsletterOverlay__Content{display:flex;flex-direction:row;height:100%;margin:9px 15px 6px;justify-content:left}.newsletterOverlay__Title{font-family:"Lato", sans-serif;-webkit-font-smoothing:antialiased;font-weight:700;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;display:block;color:#fff;line-height:18px;text-align:left;width:190px}.newsletterOverlay__Component{margin:0 0 3px 20px;text-align:center;max-width:400px}.newsletterOverlay__Disclaimer{font-family:"PT Serif", sans-serif;-webkit-font-smoothing:antialiased;color:#9A9A9A;font-size:11px;letter-spacing:0.5px;line-height:1.5;text-align:left;max-width:420px;margin:0 0 0 20px}.newsletterOverlay__Disclaimer a{color:inherit;font-weight:bold}.pageHeaderMenuPreHeader{background:#fff;font-family:"Lato", sans-serif;font-size:13px;-webkit-font-smoothing:antialiased;position:relative}.pageHeaderMenuPreHeader *{box-sizing:border-box}.pageHeaderMenuPreHeader ul,.pageHeaderMenuPreHeader li{margin:0;padding:0;list-style:none}.pageHeaderMenuPreHeader .tablet-only{display:none}.secondaryLevel{position:absolute;right:0;z-index:unset}.secondaryLevel .secondaryLevel_Item.menuitem-Find-in-store,.secondaryLevel .secondaryLevel_Item.menuitem-Help{display:none}.secondaryLevel .my-cart{z-index:2}.secondaryLevel .red-indicator__icon__count{background-color:#bc5d2c;height:14px;width:14px;display:inline-block;border-radius:50%;color:white;line-height:13px;text-align:center;font-weight:700;font-style:initial;font-size:11px;position:relative;top:-8px;letter-spacing:0}.secondaryLevel .red-indicator__icon__count.lineItemCount:empty{display:none}.secondaryLevel .red-indicator__icon__count.lineItemCount{display:none}.secondaryLevel .red-indicator__icon__count.lineItemCount--hasItems{display:block}.secondaryLevel .red-indicator__icon__count.lineItemCount--double{width:16px;border-radius:9%;margin-left:1px;margin-top:-1px}.red-indicator__icon .filled{display:none}.lineItemCount--hasItems~.filled{display:block}.lineItemCount--hasItems~.empty{display:none}.shippingMessage{display:none}@media (max-width: 1199px),(pointer: coarse){.pageHeaderMenu__openOverlay{position:relative}.pageHeaderContainer{position:sticky;position:-webkit-sticky;height:56px;z-index:9990;top:0;left:0;right:0}.pageHeaderMenuPreHeader{border-bottom:1px solid #ccc;position:relative;box-sizing:border-box;height:56px;top:0;left:0;right:0}.pageHeaderMenuOverlay{height:56px}.pageHeaderMenuOverlay .searchOverlay{width:100%;position:absolute;left:0;top:0;transform:none;padding:10px 20px;display:flex;align-items:center;gap:10px}.pageHeaderMenuOverlay .searchOverlay button{position:relative;left:0;top:2px;border:0;background:transparent;outline:none;transform:none;padding:0}.pageHeaderMenuOverlay .searchOverlay button svg{height:24px;fill:#888}.pageHeaderMenuOverlay .searchInputWrapper{position:relative;height:32px;left:0;right:0;width:100%}.pageHeaderMenuOverlay .searchInputWrapper input[type="text"],.pageHeaderMenuOverlay .searchInputWrapper__underline{position:absolute;font-size:24px;letter-spacing:.5px;height:32px;line-height:32px;width:auto}@supports (not (position: sticky)) and (not (position: -webkit-sticky)){.pageHeaderContainer{position:fixed}body{margin-top:56px}}.pageHeaderMenuPreHeader .hamburger3{border:none;display:block;position:absolute;background:transparent;outline:none;left:0;top:0;bottom:0;width:60px;margin:0;padding:0}.pageHeaderMenuPreHeader .hamburger3 span{left:20px;width:20px;position:absolute;height:2px;background:#999;border-radius:1px;transition:transform .4s ease, width .4s ease;will-change:transform, width}.pageHeaderMenuPreHeader .hamburger3 span:nth-child(1){transform:translateY(-6px) rotate(0deg)}.pageHeaderMenuPreHeader .hamburger3 span:nth-child(2){transform:translateY(6px) rotate(0deg)}.pageHeaderMenuPreHeader .hamburger3 span:nth-child(3){transform:translateY(0) rotate(0deg)}.pageHeaderMenuPreHeader .hamburger3.open span:nth-child(1){transform:translate(0) rotate(-45deg)}.pageHeaderMenuPreHeader .hamburger3.open span:nth-child(2){transform:translate(0) rotate(45deg)}.pageHeaderMenuPreHeader .hamburger3.open span:nth-child(3){transform:translate(10px) rotate(0);width:0}.secondaryLevel{right:15px;top:25px}.secondaryLevel ul{display:flex}.secondaryLevel ul li{flex:1 0 auto;margin:0 6px}.secondaryLevel ul li>a{display:inline-block;font-weight:700;letter-spacing:1px;font-size:11px;color:#666;text-transform:uppercase;padding:0 3px}.secondaryLevel ul li a i{height:15px;position:relative}.secondaryLevel ul li a i svg{height:22px;fill:#999;margin:0 0 -4px 0}.secondaryLevel ul li a i .lineItemCount{color:#999;text-align:center;position:absolute;top:85%;left:50%;transform:translate(-41%, -50%);font-style:normal;font-weight:700;font-size:13px}.secondaryLevel ul li a i.red-indicator__icon .red-indicator__icon__count{font-size:12px;color:#fff;left:23px;z-index:2}}@media (max-width: 767px){.mobile-hidden{display:none}.secondaryLevel ul li{margin:0 4px}}@media (min-width: 1200px) and (pointer: fine){.newsletterOverlay{margin:0 auto;width:950px}.newsletterOverlay__Content{flex-direction:column;margin:9px 0}.newsletterOverlay__Title{text-align:center;width:unset}.newsletterOverlay__Component{margin:7px auto 6px}.newsletterOverlay__Disclaimer{text-align:center;max-width:unset;margin:0 auto}.pageHeaderMenuPreHeader{height:30px;position:relative;background-color:#FFF}.pageHeaderMenuOverlay{height:105px}.shippingMessage{display:block;position:absolute;right:20px;top:0;line-height:30px;font-family:Lato, sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;letter-spacing:.5px;font-size:11px;font-weight:700;letter-spacing:1px;color:#999}.shippingMessage img{display:inline-block;width:16px;margin:0 2px 0 8px;vertical-align:middle}.secondaryLevel{right:20px;line-height:26px;top:50px}.secondaryLevel ul{display:flex}.secondaryLevel ul li{display:block;flex:1 0 auto;margin:0 3px}.secondaryLevel .secondaryLevel_Item{display:inline-block;letter-spacing:1px;font-size:11px;color:#7F7F7F;padding:0 5px}.secondaryLevel .secondaryLevel_Item.menuitem-Find-in-store,.secondaryLevel .secondaryLevel_Item.menuitem-Help{display:inline-block;padding:0;margin-right:20px}.secondaryLevel .secondaryLevel_Item:hover{color:#000000}.secondaryLevel_Item i{height:15px;position:relative}.secondaryLevel_Item i svg{height:26px;fill:#999;margin:0 0 -4px 0}}@media (min-width: 1200px) and (max-width: 1200px){.secondaryLevel .secondaryLevel_Item.menuitem-Find-in-store,.secondaryLevel .secondaryLevel_Item.menuitem-Help{margin-right:20px}}.pageHeaderMenuSearchUnderlay{position:relative;height:156px;background:#efefef}.menuicon svg{height:24px;width:auto;fill:none;stroke-width:2.5px;stroke:#999;stroke-linecap:round;stroke-miterlimit:10}@media (min-width: 768px){.MiniCart_CartIndicator svg,.menuicon svg{height:20px}}\n'
        }}
      />


      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            'body{overflow-x:hidden}body.drawer-open{overflow:hidden}.MiniCart{top:80px}.pageHeaderMenuPreHeader{z-index:51}.pageHeaderMenuOverlays{z-index:52;position:relative;height:0}.pageHeaderMenuOverlay{position:absolute;top:0;left:0;right:0;height:124px;background:#efefef;display:none}.pageHeaderMenuOverlay.open{display:block}.pageHeaderMenuOverlay__close{border:none;background-color:#fff;color:#ccc;width:32px;height:32px;padding:0;margin:0;position:absolute;right:0;top:0;outline:none;cursor:pointer;z-index:1}.pageHeaderMenuOverlay__close::before,.pageHeaderMenuOverlay__close::after{position:absolute;display:block;content:" ";width:18px;height:1px;background-color:#fff;top:50%;left:50%}.pageHeaderMenuOverlay__close::before{transform:translate(-50%, -50%) rotate(45deg)}.pageHeaderMenuOverlay__close::after{transform:translate(-50%, -50%) rotate(-45deg)}.pageHeaderMenuOverlay__close:hover{background-color:#000000}.searchOverlay{width:80%;position:absolute;left:50%;top:48%;transform:translate(-50%, -50%)}.searchOverlay button{position:absolute;left:0;top:58%;border:0;background:transparent;outline:none;transform:translateY(-50%)}.searchOverlay button svg{height:32px;fill:#888}.searchInputWrapper{display:block;position:relative;height:45px;left:60px;right:0;width:90%}.searchInputWrapper input[type="text"],.searchInputWrapper__underline{position:absolute;font-family:Lato, sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;letter-spacing:.5px;position:absolute;font-size:28px;font-weight:300;height:45px;line-height:45px}.searchInputWrapper input[type="text"]{width:100%;outline:none;background:transparent;border:0;color:#fff;z-index:3;padding:0}.searchInputWrapper__underline{border-bottom:2px solid #000000;color:transparent;z-index:2}.newsletterOverlay{width:768px;margin:0;height:100%;position:relative;display:flex;flex-direction:column}.newsletterOverlay__Content{display:flex;flex-direction:row;height:100%;margin:9px 15px 6px;justify-content:left}.newsletterOverlay__Title{font-family:"Lato", sans-serif;-webkit-font-smoothing:antialiased;font-weight:700;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;display:block;color:#fff;line-height:18px;text-align:left;width:190px}.newsletterOverlay__Component{margin:0 0 3px 20px;text-align:center;max-width:400px}.newsletterOverlay__Disclaimer{font-family:"PT Serif", sans-serif;-webkit-font-smoothing:antialiased;color:#9A9A9A;font-size:11px;letter-spacing:0.5px;line-height:1.5;text-align:left;max-width:420px;margin:0 0 0 20px}.newsletterOverlay__Disclaimer a{color:inherit;font-weight:bold}.pageHeaderMenuPreHeader{background:#fff;font-family:"Lato", sans-serif;font-size:13px;-webkit-font-smoothing:antialiased;position:relative}.pageHeaderMenuPreHeader *{box-sizing:border-box}.pageHeaderMenuPreHeader ul,.pageHeaderMenuPreHeader li{margin:0;padding:0;list-style:none}.pageHeaderMenuPreHeader .tablet-only{display:none}.secondaryLevel{position:absolute;right:0;z-index:unset}.secondaryLevel .secondaryLevel_Item.menuitem-Find-in-store,.secondaryLevel .secondaryLevel_Item.menuitem-Help{display:none}.secondaryLevel .my-cart{z-index:2}.secondaryLevel .red-indicator__icon__count{background-color:#bc5d2c;height:14px;width:14px;display:inline-block;border-radius:50%;color:white;line-height:13px;text-align:center;font-weight:700;font-style:initial;font-size:11px;position:relative;top:-8px;letter-spacing:0}.secondaryLevel .red-indicator__icon__count.lineItemCount:empty{display:none}.secondaryLevel .red-indicator__icon__count.lineItemCount{display:none}.secondaryLevel .red-indicator__icon__count.lineItemCount--hasItems{display:block}.secondaryLevel .red-indicator__icon__count.lineItemCount--double{width:16px;border-radius:9%;margin-left:1px;margin-top:-1px}.red-indicator__icon .filled{display:none}.lineItemCount--hasItems~.filled{display:block}.lineItemCount--hasItems~.empty{display:none}.shippingMessage{display:none}@media (max-width: 1199px),(pointer: coarse){.pageHeaderMenu__openOverlay{position:relative}.pageHeaderContainer{position:sticky;position:-webkit-sticky;height:56px;z-index:9990;top:0;left:0;right:0}.pageHeaderMenuPreHeader{border-bottom:1px solid #ccc;position:relative;box-sizing:border-box;height:56px;top:0;left:0;right:0}.pageHeaderMenuOverlay{height:56px}.pageHeaderMenuOverlay .searchOverlay{width:100%;position:absolute;left:0;top:0;transform:none;padding:10px 20px;display:flex;align-items:center;gap:10px}.pageHeaderMenuOverlay .searchOverlay button{position:relative;left:0;top:2px;border:0;background:transparent;outline:none;transform:none;padding:0}.pageHeaderMenuOverlay .searchOverlay button svg{height:24px;fill:#888}.pageHeaderMenuOverlay .searchInputWrapper{position:relative;height:32px;left:0;right:0;width:100%}.pageHeaderMenuOverlay .searchInputWrapper input[type="text"],.pageHeaderMenuOverlay .searchInputWrapper__underline{position:absolute;font-size:24px;letter-spacing:.5px;height:32px;line-height:32px;width:auto}@supports (not (position: sticky)) and (not (position: -webkit-sticky)){.pageHeaderContainer{position:fixed}body{margin-top:56px}}.pageHeaderMenuPreHeader .hamburger3{border:none;display:block;position:absolute;background:transparent;outline:none;left:0;top:0;bottom:0;width:60px;margin:0;padding:0}.pageHeaderMenuPreHeader .hamburger3 span{left:20px;width:20px;position:absolute;height:2px;background:#999;border-radius:1px;transition:transform .4s ease, width .4s ease;will-change:transform, width}.pageHeaderMenuPreHeader .hamburger3 span:nth-child(1){transform:translateY(-6px) rotate(0deg)}.pageHeaderMenuPreHeader .hamburger3 span:nth-child(2){transform:translateY(6px) rotate(0deg)}.pageHeaderMenuPreHeader .hamburger3 span:nth-child(3){transform:translateY(0) rotate(0deg)}.pageHeaderMenuPreHeader .hamburger3.open span:nth-child(1){transform:translate(0) rotate(-45deg)}.pageHeaderMenuPreHeader .hamburger3.open span:nth-child(2){transform:translate(0) rotate(45deg)}.pageHeaderMenuPreHeader .hamburger3.open span:nth-child(3){transform:translate(10px) rotate(0);width:0}.secondaryLevel{right:15px;top:25px}.secondaryLevel ul{display:flex}.secondaryLevel ul li{flex:1 0 auto;margin:0 6px}.secondaryLevel ul li>a{display:inline-block;font-weight:700;letter-spacing:1px;font-size:11px;color:#666;text-transform:uppercase;padding:0 3px}.secondaryLevel ul li a i{height:15px;position:relative}.secondaryLevel ul li a i svg{height:22px;fill:#999;margin:0 0 -4px 0}.secondaryLevel ul li a i .lineItemCount{color:#999;text-align:center;position:absolute;top:85%;left:50%;transform:translate(-41%, -50%);font-style:normal;font-weight:700;font-size:13px}.secondaryLevel ul li a i.red-indicator__icon .red-indicator__icon__count{font-size:12px;color:#fff;left:23px;z-index:2}}@media (max-width: 767px){.mobile-hidden{display:none}.secondaryLevel ul li{margin:0 4px}}@media (min-width: 1200px) and (pointer: fine){.newsletterOverlay{margin:0 auto;width:950px}.newsletterOverlay__Content{flex-direction:column;margin:9px 0}.newsletterOverlay__Title{text-align:center;width:unset}.newsletterOverlay__Component{margin:7px auto 6px}.newsletterOverlay__Disclaimer{text-align:center;max-width:unset;margin:0 auto}.pageHeaderMenuPreHeader{height:30px;position:relative;background-color:#FFF}.pageHeaderMenuOverlay{height:105px}.shippingMessage{display:block;position:absolute;right:20px;top:0;line-height:30px;font-family:Lato, sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;letter-spacing:.5px;font-size:11px;font-weight:700;letter-spacing:1px;color:#999}.shippingMessage img{display:inline-block;width:16px;margin:0 2px 0 8px;vertical-align:middle}.secondaryLevel{right:20px;line-height:26px;top:50px}.secondaryLevel ul{display:flex}.secondaryLevel ul li{display:block;flex:1 0 auto;margin:0 3px}.secondaryLevel .secondaryLevel_Item{display:inline-block;letter-spacing:1px;font-size:11px;color:#7F7F7F;padding:0 5px}.secondaryLevel .secondaryLevel_Item.menuitem-Find-in-store,.secondaryLevel .secondaryLevel_Item.menuitem-Help{display:inline-block;padding:0;margin-right:20px}.secondaryLevel .secondaryLevel_Item:hover{color:#000000}.secondaryLevel_Item i{height:15px;position:relative}.secondaryLevel_Item i svg{height:26px;fill:#999;margin:0 0 -4px 0}}@media (min-width: 1200px) and (max-width: 1200px){.secondaryLevel .secondaryLevel_Item.menuitem-Find-in-store,.secondaryLevel .secondaryLevel_Item.menuitem-Help{margin-right:20px}}.pageHeaderMenuSearchUnderlay{position:relative;height:156px;background:#efefef}.menuicon svg{height:24px;width:auto;fill:none;stroke-width:2.5px;stroke:#999;stroke-linecap:round;stroke-miterlimit:10}@media (min-width: 768px){.MiniCart_CartIndicator svg,.menuicon svg{height:20px}}\n'
        }}
      />


      <style
        dangerouslySetInnerHTML={{
          __html:
            ".MiniCart_Cart_Heading{font-family:'Lato', sans-serif;-webkit-font-smoothing:antialiased;line-height:30px;font-size:12px;letter-spacing:0.5px;text-transform:none;min-height:73px;border-bottom:none;cursor:default;display:flex;flex-direction:column;align-items:center;justify-content:space-between;position:relative;background-color:#fff}.MiniCart_Cart_Heading a{pointer-events:none;max-height:24px}.MiniCart_Cart_Heading bellroy-cart-indicator{padding-top:25px;max-height:24px}.MiniCart_Cart_CloseButton{position:absolute;right:0;padding:20px 25px;border:none;font-family:'Lato', sans-serif;font-weight:700;font-size:12px;line-height:15px;color:#676767;background-color:transparent;cursor:pointer;-webkit-font-smoothing:antialiased;letter-spacing:1px}.MiniCart_Cart_CloseButton>span{margin-right:15px}.MiniCart_Cart_CloseButtonIcon{width:15px;height:15px}.MiniCart_Cart_CloseButtonIcon:before,.MiniCart_Cart_CloseButtonIcon:after{display:block;content:' ';border-left:1px solid #676767;position:absolute;right:50%;top:20px;height:15px}.MiniCart_Cart_CloseButtonIcon:before{transform:rotate(45deg)}.MiniCart_Cart_CloseButtonIcon:after{transform:rotate(-45deg)}.MiniCart_Cart_CloseButton:focus{outline:none}\n"
        }}
      />





      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n                .MiniCart_Slider_Overlay {\n                    width: 100vw;\n                    height: 100vh;\n                    position: fixed;\n                    top: 0;\n                    bottom: 0;\n                    left: 0;\n                    right: 0;\n                    z-index: 1000000000;\n                    background-color: #000;\n                    opacity: 0;\n                    pointer-events: none;\n                }\n                .MiniCart_Slider_Overlay-visible {\n                    opacity: 0.4;\n                    pointer-events: all;\n                    transition: opacity 200ms ease-in;\n                }\n                .MiniCart_Slider {\n                    position: fixed;\n                    right: 0;\n                    bottom: 0;\n                    top: 0;\n                    width: 435px;\n                    max-width: 90vw;\n                    z-index: 1000000000;\n                    opacity: 0;\n                    pointer-events: none;\n                    transform: translateX(100%);\n                    transition: all 200ms linear;\n                }\n                .MiniCart_Slider-visible {\n                    transform: translateX(0);\n                    transition: all 500ms linear;\n                    opacity: 1;\n                    pointer-events: all;\n                }\n                .MiniCart_Slider_CloseButton {\n                    position: absolute;\n                    right: 0;\n                    top: 0;\n                    z-index: 200;\n                }\n            "
        }}
      />





      <a href="/">
        <img src="https://res.cloudinary.com/dmyudwjwx/image/upload/v1750089515/black_olgyju.webp" id="logo123123" alt="" />
      </a>

      <Fav />


      <div className="pageHeaderContainer" style={{ height: 0 }}>
        <div className="pageHeaderMenuOverlays">
          <div
            className="pageHeaderMenuOverlay pageHeaderMenuOverlays--search"
            id="search-menu-overlay"
          >
            <p className="myBlack mt-10">What are you looking for?</p>
            <button
              className="pageHeaderMenuOverlay__close js-close-overlay mt-20"
              aria-label="close"
              onClick={handleClickc2}
            />
            <form action={'/search'} method="get" className="searchOverlay">
              <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.6 36">
                  <path d="M35 32.6l-8.4-8.4A14.96 14.96 0 0 0 14.9 0C6.7 0 0 6.7 0 14.9s6.7 14.9 14.9 14.9c3.3 0 6.3-1.1 8.8-2.9l8.5 8.5c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8zM4 14.9C4 8.9 8.9 4 14.9 4s10.9 4.9 10.9 10.9-4.9 10.9-10.9 10.9S4 20.9 4 14.9z" />
                </svg>
              </button>
              <label className="searchInputWrapper">
                <input type="text" name="q" placeholder="Search" />
                <span className="searchInputWrapper__underline" />
              </label>
            </form>
          </div>
        </div>
        <div className={clsx(
          'pageHeaderMenuPreHeader transition-colors duration-300',
          'bg-white'
        )} id="PageMenuPreHeader3z">


          <div className="shippingMessage" />
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                '.mobileNewsletter{position:absolute;top:25px;left:62px}.menuicon{position:relative}.menuicon .indicator{position:absolute;top:-14px;right:-9px;border-radius:50%;background-color:#000000;color:#fff;font-size:10px;height:12px;line-height:13px;text-indent:1px;white-space:nowrap;min-width:12px;text-align:center;font-family:"Lucida Console", Monaco, monospace;border:2px solid #fff;box-sizing:content-box}@media (min-width: 768px){.mobileNewsletter{display:none}.menuicon .indicator{top:-17px}}\n'
            }}
          />
          <div className="mobileNewsletter">
            <a
              className="js-open-newsletter"
              data-auto-id="true"
              id="page-header-newsletter-1"
              onClick={handleClickc}
            >
              <span className="menuicon ">
                <svg
                  width="64px" height="64px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M3.74181 20.5545C4.94143 22 7.17414 22 11.6395 22H12.3607C16.8261 22 19.0589 22 20.2585 20.5545M3.74181 20.5545C2.54219 19.1091 2.95365 16.9146 3.77657 12.5257C4.36179 9.40452 4.65441 7.84393 5.7653 6.92196M3.74181 20.5545C3.74181 20.5545 3.74181 20.5545 3.74181 20.5545ZM20.2585 20.5545C21.4581 19.1091 21.0466 16.9146 20.2237 12.5257C19.6385 9.40452 19.3459 7.84393 18.235 6.92196M20.2585 20.5545C20.2585 20.5545 20.2585 20.5545 20.2585 20.5545ZM18.235 6.92196C17.1241 6 15.5363 6 12.3607 6H11.6395C8.46398 6 6.8762 6 5.7653 6.92196M18.235 6.92196C18.235 6.92196 18.235 6.92196 18.235 6.92196ZM5.7653 6.92196C5.7653 6.92196 5.7653 6.92196 5.7653 6.92196Z"
                      stroke="#000000"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
 
              </span>

            </a>
          </div>
          <nav className=" secondaryLevel ">
            <ul>
        

              <li>
                <a
                  href="/shop"
                  className="js-open-search secondaryLevel_Item"
                  data-auto-id="true"
                  id="page-header-search-3"
                >
                  <span className="menuicon menuicon3">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.43526 1.25H16.5647C17.1346 1.24998 17.6186 1.24997 18.0185 1.29132C18.4443 1.33534 18.8378 1.43094 19.2096 1.66071C19.5814 1.89048 19.8429 2.19971 20.0727 2.56088C20.2885 2.9001 20.5049 3.33297 20.7598 3.8428L20.7763 3.87574C20.786 3.89518 20.7949 3.91504 20.8029 3.93526L22.2065 7.4834C22.3735 7.90559 22.5586 8.4323 22.6127 8.97128C22.6681 9.52258 22.5921 10.1541 22.1601 10.7019C21.8068 11.15 21.3155 11.4863 20.75 11.6463V21.25H22C22.4142 21.25 22.75 21.5858 22.75 22C22.75 22.4142 22.4142 22.75 22 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22C1.25 21.5858 1.58579 21.25 2 21.25H3.25V11.6464C2.68446 11.4863 2.19312 11.15 1.83975 10.7019C1.40779 10.1541 1.33182 9.52257 1.38718 8.97127C1.4413 8.43229 1.62639 7.90559 1.7934 7.4834L3.19701 3.93526C3.20501 3.91504 3.21388 3.89518 3.22361 3.87574L3.2401 3.84275C3.49498 3.33295 3.71139 2.90009 3.92723 2.56088C4.15704 2.19971 4.41853 1.89048 4.79031 1.66071C5.16208 1.43094 5.55561 1.33534 5.98142 1.29132C6.38134 1.24997 6.86529 1.24998 7.43526 1.25ZM17.9999 10.8875C18.3359 11.2433 18.7658 11.5096 19.25 11.6465V21.25H15.25L15.25 18.4678C15.25 18.028 15.25 17.6486 15.2218 17.3374C15.192 17.0082 15.1259 16.6822 14.9486 16.375C14.7511 16.033 14.467 15.7489 14.125 15.5514C13.8178 15.3741 13.4918 15.308 13.1627 15.2782C12.8514 15.25 12.472 15.25 12.0322 15.25H11.9678C11.528 15.25 11.1486 15.25 10.8373 15.2782C10.5082 15.308 10.1822 15.3741 9.875 15.5514C9.53296 15.7489 9.24892 16.033 9.05144 16.375C8.87407 16.6822 8.80802 17.0082 8.77818 17.3374C8.74997 17.6486 8.74998 18.028 8.75 18.4677L8.75 21.25H4.75V11.6465C5.23413 11.5095 5.66398 11.2433 5.99992 10.8875C6.5013 11.4186 7.2119 11.75 7.99991 11.75C8.78793 11.75 9.49853 11.4186 9.99992 10.8875C10.5013 11.4186 11.2119 11.75 11.9999 11.75C12.7879 11.75 13.4985 11.4186 13.9999 10.8875C14.5013 11.4186 15.2119 11.75 15.9999 11.75C16.7879 11.75 17.4985 11.4186 17.9999 10.8875ZM10.25 21.25H13.75V18.5C13.75 18.0189 13.7493 17.7082 13.7279 17.4727C13.7075 17.2476 13.6731 17.1659 13.6495 17.125C13.5837 17.011 13.489 16.9163 13.375 16.8505C13.3341 16.8269 13.2524 16.7925 13.0273 16.7721C12.7918 16.7507 12.4811 16.75 12 16.75C11.5189 16.75 11.2082 16.7507 10.9727 16.7721C10.7476 16.7925 10.6659 16.8269 10.625 16.8505C10.511 16.9163 10.4163 17.011 10.3505 17.125C10.3269 17.1659 10.2925 17.2476 10.2721 17.4727C10.2507 17.7082 10.25 18.0189 10.25 18.5V21.25ZM6.74991 9C6.74991 9.69036 7.30956 10.25 7.99991 10.25C8.69027 10.25 9.24991 9.69036 9.24991 9C9.24991 8.58579 9.5857 8.25 9.99991 8.25C10.4141 8.25 10.7499 8.58579 10.7499 9C10.7499 9.69036 11.3096 10.25 11.9999 10.25C12.6903 10.25 13.2499 9.69036 13.2499 9C13.2499 8.58579 13.5857 8.25 13.9999 8.25C14.4141 8.25 14.7499 8.58579 14.7499 9C14.7499 9.69036 15.3096 10.25 15.9999 10.25C16.6903 10.25 17.2499 9.69036 17.2499 9C17.2499 8.58579 17.5857 8.25 17.9999 8.25C18.4141 8.25 18.7499 8.58579 18.7499 9C18.7499 9.69036 19.3096 10.25 19.9999 10.25C20.3979 10.25 20.7522 10.0649 20.9823 9.77305C21.0962 9.62859 21.1513 9.43094 21.1202 9.12114C21.0879 8.79903 20.969 8.43275 20.8117 8.03518L19.4201 4.51739C19.1524 3.98204 18.9735 3.62749 18.8071 3.36612C18.6472 3.1147 18.5325 3.00562 18.421 2.93669C18.3095 2.86776 18.1606 2.81401 17.8642 2.78336C17.5505 2.75093 17.1446 2.75 16.5278 2.75H7.47214C6.85533 2.75 6.4494 2.75093 6.13569 2.78336C5.83927 2.81401 5.69044 2.86776 5.5789 2.93669C5.46737 3.00562 5.35274 3.1147 5.19276 3.36612C5.02646 3.62749 4.84755 3.98204 4.57983 4.51739L3.18823 8.03518C3.03095 8.43275 2.91202 8.79903 2.87967 9.12115C2.84856 9.43095 2.90366 9.62861 3.01759 9.77307C3.2477 10.0649 3.60196 10.25 3.99991 10.25C4.69027 10.25 5.24991 9.69036 5.24991 9C5.24991 8.58579 5.5857 8.25 5.99991 8.25C6.41413 8.25 6.74991 8.58579 6.74991 9Z"
                          fill="#999"
                        />{" "}
                      </g>
                    </svg>

                  </span>
                </a>
              </li>

              <li>
                <a
                  onClick={handleClickc2}
                  className="js-open-search secondaryLevel_Item"
                  data-auto-id="true"
                  id="page-header-search-1"
                >
                  <span className="menuicon4 menuicon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 27">
                      <circle cx="13.7" cy="11.1" r={9} />
                      <path d="M20.1 17.5l6.8 6.8" />
                    </svg>
                  </span>
                </a>
              </li>

              <li>
                <a
                  onClick={handleClickf}
                  className="js-open-search secondaryLevel_Item  "
                  data-auto-id="true"
                  id="page-header-search-2"
                  style={{ marginRight: "5em" }}
                >
                  <span className="menuicon relative">
                    {favorites?.length > 0 && (
                      <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-[#dbc0d3] z-10"></span>
                    )}

                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                          stroke="#999"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </nav>


          <button id='hamburger3' className="hamburger3 xl:pointer-fine:br_invisible" onClick={handleClick}>
            <span />
            <span />
            <span />
          </button>
        </div>
        {/* non_gendered_bags + non_gendered_wallets + non_spotlight */}
        <div id='myUniD' className='pageHeaderMenu br_group/menu br_z-50 br_pointer-events-none br_relative br_w-screen br_h-screen br_inset-0 br_overflow-hidden /100 br_opacity-0 br_transition-opacity br_ease-in-out br_duration-300 open:br_opacity-100 open:br_pointer-events-auto xl:pointer-fine:br_h-[75px] xl:pointer-fine:br_overflow-visible xl:pointer-fine:br_opacity-100 xl:pointer-fine:br_bg-transparent xl:pointer-fine:br_pointer-events-auto text-white  '>
          <div className="topLevel__close br_absolute br_inset-0"></div>
          <nav
            className="topLevel  br_h-screen br_overflow-y-auto br_max-w-[420px] br_h-screen br_pb-36 br_-translate-x-full br_transition-transform br_ease-in-out br_duration-300 group-open/menu:br_translate-x-0 xl:pointer-fine:br_translate-x-0 xl:pointer-fine:br_overflow-visible xl:pointer-fine:br_z-10 xl:pointer-fine:br_h-auto xl:pointer-fine:br_max-w-none xl:pointer-fine:br_absolute xl:pointer-fine:br_left-0 xl:pointer-fine:br_top-[9px] xl:pointer-fine:br_pb-0"
            data-location="Menu"
            data-roybell=""
          >
            <ul className="xl:pointer-fine:br_flex xl:pointer-fine:br_pl-[200px]">



              <li className="br_group/item" id="yourDivId222">
                <a
                  className="br_flex br_items-center br_justify-between br_px-8 br_py-4  br_border-solid br_border-0 br_border-b  br_text-white br_text-lg-sans-bold-stretched br_no-underline xl:pointer-fine: xl:pointer-fine:br_text-base-sans-bold-stretched xl:pointer-fine:group-hover/item: xl:pointer-fine:focus:"
                  href="/"
                  id="2_phoneCases_all-phone-cases"
                >
                  <div className="br_flex br_items-center br_gap-2 myGray">
                    Home
                  </div>

                </a>

              </li>
              <li className="br_group/item"
                id="yourDivId"
              >
                <a
                  className="br_flex br_items-center br_justify-between br_px-8 br_py-4  br_border-solid br_border-0 br_border-b  br_text-white br_text-lg-sans-bold-stretched br_no-underline xl:pointer-fine: xl:pointer-fine:br_text-base-sans-bold-stretched xl:pointer-fine:group-hover/item: xl:pointer-fine:focus:"
                  href="/shop"
                >
                  <div className="br_flex br_items-center br_gap-2 myGray">
                    Shop
                  </div>
                </a>









              </li>
              <li className="br_group/item">
                <a
                  className="br_flex br_items-center br_justify-between br_px-8 br_py-4  br_border-solid br_border-0 br_border-b  br_text-white br_text-lg-sans-bold-stretched br_no-underline xl:pointer-fine: xl:pointer-fine:br_text-base-sans-bold-stretched xl:pointer-fine:group-hover/item: xl:pointer-fine:focus:"
                  href="/about"
                  id="4_travel_all-travel"
                >
                  <div className="br_flex br_items-center br_gap-2 myGray">About Us</div>
                </a>

              </li>
              <li className="br_group/item">
                <a
                  className="br_flex br_items-center br_justify-between br_px-8 br_py-4  br_border-solid br_border-0 br_border-b  br_text-white br_text-lg-sans-bold-stretched br_no-underline xl:pointer-fine: xl:pointer-fine:br_text-base-sans-bold-stretched xl:pointer-fine:group-hover/item: xl:pointer-fine:focus:"
                  href="/contact"
                  id="about-us_about-us"
                >
                  <div className="br_flex br_items-center br_gap-2 myGray">Contact Us</div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: "\n.menuicon svg { \n    stroke: #fff; \n}\n"
        }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .pageHeaderMenuPreHeader .hamburger3 span { \n        background: #fff; \n    }\n"
        }}
      />



    </>
  );
}

export default NavBar;