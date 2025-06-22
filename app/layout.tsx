"use client"
import {  Footer,Navbar2 ,Navbar3 } from '../components'
import './globals.css'
import './custom.css'
import './bootstrap.min.css'
import './bs-select.css'
import './slick.css' 
import { CartProvider } from './context/CartContext';
import { BooleanProvider } from './context/CartBoolContext'; 
import GifLoader from '../components/GifLoader'
import Offer from '../components/Offer' 
import { FavoriteProvider } from './context/FavContext';



 

 

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

 

  return (
    <html className="no-js no-touch supports-no-cookies" lang="en"> 
    <>
  <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
  <meta content="en" httpEquiv="Content-Language" />
  <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
  <meta
    content="width=device-width, initial-scale=1, maximum-scale=1"
    name="viewport"
  />
  <meta content="max-image-preview:large" name="robots" />
  <title>
    Milano Moda
  </title>
  <meta
    content="At milano moda, we're reshaping the way businesses connect."
    name="description" 
  />
  <meta content="milanomoda" name="keywords" property="milanomoda, milanomoda, design, interior, box, models, 3ds, 3d, 3ds max, autocad, vray" />
  <meta
    content="milanomoda"
    name=""
    property="og:title"
  />
  <meta
    content="https://milanomoda.org/"
    name=""
    property="og:url"
  />
  <meta content="website" name="" property="og:type" />
  <meta
    content="At milano moda, we're reshaping the way businesses connect."
    name=""
    property="og:description"
  />
  <meta
    content="https://res.cloudinary.com/dmyudwjwx/image/upload/v1750090557/ico_atse4z.webp"
    name=""
    property="og:image"
  />
   
  <link
    href="https://res.cloudinary.com/dmyudwjwx/image/upload/v1750090557/ico_atse4z.webp"
    rel="apple-touch-icon"
    sizes="180x180"
  />
  <link
    href="https://res.cloudinary.com/dmyudwjwx/image/upload/v1750090557/ico_atse4z.webp"
    rel="icon"
    sizes="32x32" 
  />
  <link
    href="https://res.cloudinary.com/dmyudwjwx/image/upload/v1750090557/ico_atse4z.webp"
    rel="icon"
    sizes="16x16" 
  /> 
 
  <meta content="#ffffff" name="msapplication-TileColor" />
  <meta content="#ffffff" name="theme-color" />
  <link href="https://assets.bellroy.com" rel="preconnect" />
  <link href="https://bellroy.imgix.net" rel="preconnect" /> 
  

 
 










  <link
    href="css/webfonts-3e3c2400.css"
    rel="preload"
    as="style"
  />
  <link
    rel="stylesheet"
    href="css/webfonts-3e3c2400.css"
    media="print" 
  />
  <link
    rel="stylesheet"
    href="css/style-4109db2b.css"
  />

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"/>            
                
                
                

 
  
</>

      <body>
 
      <Offer /> 
      <GifLoader />

        
        <BooleanProvider>
        <CartProvider>
          <FavoriteProvider>
          <Navbar2 /> 
          <Navbar3 /> 
          
          {/* <GoogleAnalytics gaId="" /> */}
          {children} 
          <Footer />
          </FavoriteProvider>
        </CartProvider>
        </BooleanProvider>
        
      </body>
    </html>
  )
}
