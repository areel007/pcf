import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppHeader } from "./components/AppHeader";
import { useState, useEffect } from "react";
import MobileMenu from "./components/MobileMenu";
import Home from "./pages/Home";
import Cocktails from "./components/Cocktails";
import Sandwiches from "./components/Sandwiches";
import Foods from "./components/Foods";

import AppFooter from "./components/AppFooter";
import Order from "./components/Order";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";

function App() {
  const [menu] = useState([
    {
      name: "home",
      url: "/",
    },
    {
      name: "menu",
      url: "/#menu",
    },
    {
      name: "about us",
      url: "/about-us",
    },
    {
      name: "event & gallery",
      url: "/gallery",
    },
    {
      name: "contact us",
      url: "/#contact-us",
    },
  ]);

  const [isMobileMenuOut, setIsMobileMenuOut] = useState(false);

  const openMobileMenu = () => setIsMobileMenuOut(true);

  const closeMobileMenu = () => setIsMobileMenuOut(false);

  const [cocktailCards] = useState([
    {
      name: "Sunset mocktail",
      img: "https://res.cloudinary.com/dpp5z9ik2/image/upload/v1690581234/pcfandmore/sunset-cocktails_sjdhys.jpg",
      price: 3000,
    },
    {
      name: "Blue curacoa cocktail",
      img: "https://res.cloudinary.com/dpp5z9ik2/video/upload/v1690582967/pcfandmore/WhatsApp_Video_2023-07-20_at_6.10.45_PM_1_ofzlne.mp4",
      price: 4000,
    },
    {
      name: "Banana Island Cocktail",
      img: "https://res.cloudinary.com/dpp5z9ik2/image/upload/v1690583786/pcfandmore/WhatsApp_Image_2023-07-20_at_6.11_1_1_dlbvkz.jpg",
      price: 4000,
    },
    {
      name: "Strawberry daiquiri cocktail",
      img: "https://res.cloudinary.com/dpp5z9ik2/video/upload/v1690583922/pcfandmore/WhatsApp_Video_2023-07-20_at_6.08.31_PM_1_vodp4y.mp4",
      price: 4000,
    },
    {
      name: "Chicken Shawarma with sausage",
      img: "https://res.cloudinary.com/dpp5z9ik2/image/upload/v1690584073/pcfandmore/WhatsApp_Image_2023-07-20_at_6.07.57_PM_wflqh8.jpg",
      price: 2000,
    },
    {
      name: "Double club sandwich",
      img: "https://res.cloudinary.com/dpp5z9ik2/image/upload/v1690584235/pcfandmore/WhatsApp_Image_2023-07-20_at_6.09_1_jqt2bs.jpg",
      price: 4000,
    },
    {
      name: "Combo of sandwiches, burger and fries",
      img: "https://res.cloudinary.com/dpp5z9ik2/image/upload/v1690584500/pcfandmore/WhatsApp_Image_2023-07-20_at_6.13_1_qnx4qb.jpg",
      price: 7000,
    },
  ]);

  const [product, setProduct] = useState(() => {
    // Get the product value from localStorage when the component mounts for the first time
    const storedProduct = localStorage.getItem("order");
    return storedProduct ? JSON.parse(storedProduct) : { name: "", price: 0 };
  });

  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [showCart, setShowCart] = useState(() => {
    // Get the showCart value from localStorage when the component mounts for the first time
    const storedShowCart = localStorage.getItem("showCart");
    return storedShowCart ? JSON.parse(storedShowCart) : false;
  });

  const handleSelectProduct = (e) => {
    setShowOrderForm(true);
    setProduct(e);
    setShowCart(true);

    // Store the updated showCart value in localStorage
    localStorage.setItem("showCart", JSON.stringify(true));

    const productStringify = JSON.stringify(product);
    localStorage.setItem("order", productStringify);
  };

  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(product));
    if (localStorage.getItem("order").name) {
      setShowCart(true);
    }
  }, [product, showCart]);

  const handleClientName = (e) => {
    setClientName(e.target.value);
  };

  const handleClientEmail = (e) => {
    setClientEmail(e.target.value);
  };

  const handleClientPhone = (e) => {
    setClientPhone(e.target.value);
  };

  const handleCloseOrderForm = () => {
    setShowOrderForm(false);
  };

  const handleOpenOrderForm = () => {
    setShowOrderForm(true);
  };

  const handleProductOrder = () => {
    localStorage.removeItem("order");
    setShowCart(false);

    // Update the showCart value in localStorage when the cart is closed
    localStorage.setItem("showCart", JSON.stringify(false));
  };

  const handleClearOrderForm = () => {
    localStorage.removeItem("order");
    localStorage.removeItem("showCart");
    setShowCart(false);
    setShowOrderForm(false);
  };

  return (
    <>
      <Router>
        <MobileMenu
          menu={menu}
          isMobileMenuOut={isMobileMenuOut}
          closeMobileMenu={closeMobileMenu}
        />
        <AppHeader
          menu={menu}
          openMobileMenu={openMobileMenu}
          handleOpenOrderForm={handleOpenOrderForm}
          showCart={showCart}
        />

        <Order
          showOrderForm={showOrderForm}
          handleCloseOrderForm={handleCloseOrderForm}
          product={product}
          clientName={clientName}
          clientEmail={clientEmail}
          clientPhone={clientPhone}
          handleClientEmail={handleClientEmail}
          handleClientName={handleClientName}
          handleClientPhone={handleClientPhone}
          handleProductOrder={handleProductOrder}
          handleClearOrderForm={handleClearOrderForm}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                product={product}
                clientName={clientName}
                handleClientName={handleClientName}
                clientEmail={clientEmail}
                handleClientEmail={handleClientEmail}
                clientPhone={clientPhone}
                handleClientPhone={handleClientPhone}
              />
            }
          >
            <Route
              path=""
              element={
                <Cocktails
                  card__details={cocktailCards}
                  select__product={handleSelectProduct}
                />
              }
              card__details={cocktailCards}
            />
            <Route path="/sandwiches" element={<Sandwiches />} />
            <Route path="/foods" element={<Foods />} />
          </Route>

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        <AppFooter />
      </Router>
    </>
  );
}

export default App;
