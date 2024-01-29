import DeliveryIcon from "../assets/images/delivery.png";
import PropTypes from "prop-types";
import IconHome from "./icons/Icon.Home";
import IconGrid from "./icons/Icon.Grid";
import IconPerson from "./icons/Icon.Person";
import IconPeople from "./icons/Icon.People";
import IconHamburger from "./icons/Icon.Hamburger";
import Peculiar from "../assets/images/peculiar-logo.png";
import { useState, useEffect } from "react";
import Cart from "./icons/Cart";

import styles from "../assets/css.module/icon.module.css";
import Notification from "./icons/Notification";
import IconPhoto from "./icons/Icon.Photo";

export const AppHeader = ({
  menu,
  openMobileMenu,
  handleOpenOrderForm,
  showCart,
}) => {
  const [scrollPosition, setScrollPosistion] = useState(0);
  const updateScrollPosition = () => {
    setScrollPosistion(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);

    // Check if there's an order in localStorage and update showCart state accordingly
    // const order = JSON.parse(localStorage.getItem("order"));
    // if (order && order.name) {
    //   setShowCart(true);
    // }

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", updateScrollPosition);
  //   if (JSON.parse(localStorage.getItem("order"))?.name) {
  //     setShowCart(true);
  //   }
  //   return () => {
  //     window.removeEventListener("scroll", updateScrollPosition);
  //   };
  // }, []);

  return (
    <header
      className={`w-full py-[10px] md:py-[20px] fixed z-[20] ${
        scrollPosition > 0 ? "bg-black" : ""
      }`}
    >
      <div className="w-[90%] xl:w-[1200px] mx-auto">
        <div
          className={`flex items-center ${
            scrollPosition > 0 ? "justify-end" : "justify-between"
          }`}
        >
          <img
            src={Peculiar}
            alt="peculiar cocktail"
            className={`w-[50px] md:w-[70px] cursor-pointer transition hover:scale-[1.2] ${
              scrollPosition > 0 ? "hidden" : "block"
            }`}
          />

          <div className="flex items-end gap-[5px] md:gap-[20px]">
            <nav className="hidden md:block">
              <div className={`${scrollPosition > 0 ? "hidden" : "block"}`}>
                <div
                  className={`hidden md:flex justify-end gap-[10px] items-center mb-[10px]`}
                >
                  <img
                    src={DeliveryIcon}
                    alt="peculiar cocktail"
                    className="w-[24px]"
                  />
                  <div className={`text-white text-[14px]`}>
                    Call for Delivery: +234 906 193 5961
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-[20px]">
                <div className="flex items-center gap-[20px]">
                  {menu.map((_menu, i) => {
                    return (
                      <a
                        href={_menu.url}
                        key={i}
                        className="uppercase text-[12px] text-white flex gap-[2px] border-b border-transparent hover:border-b hover:border-white"
                      >
                        {_menu.name === "home" ? (
                          <IconHome />
                        ) : _menu.name === "menu" ? (
                          <IconGrid />
                        ) : _menu.name === "contact us" ? (
                          <IconPerson />
                        ) : _menu.name === "about us" ? (
                          <IconPeople />
                        ) : _menu.name === "event & gallery" ? (
                          <IconPhoto />
                        ) : null}
                        {_menu.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </nav>
            <IconHamburger openMobileMenu={openMobileMenu} />
            {showCart && (
              <div className="relative" onClick={handleOpenOrderForm}>
                <div className="absolute top-[-3px] right-[-5px] text-[#fff] bg-[#c11111] w-[15px] h-[15px] rounded-full text-[12px] flex justify-center items-center font-[700] cursor-pointer">
                  <Notification />
                </div>
                <Cart icon__style={styles.cart__icon} />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

AppHeader.propTypes = {
  menu: PropTypes.array.isRequired,
  openMobileMenu: PropTypes.func.isRequired,
  showCart: PropTypes.bool,
  handleOpenOrderForm: PropTypes.func.isRequired,
};
