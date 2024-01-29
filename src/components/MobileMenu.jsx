import PropTypes from "prop-types";
import IconClose from "./icons/Icon.Close";
import Styles from "../assets/css.module/mobileMenu.module.css";

export default function MobileMenu({ menu, isMobileMenuOut, closeMobileMenu }) {
  return (
    <div
      className={`fixed w-[100%] h-[100vh] top-0 left-0 z-[100] bg-[#c11111] transition transform ${
        isMobileMenuOut ? "translate-x-0" : "translate-x-[-100%]"
      }`}
    >
      <IconClose
        icon__style={Styles.icon__style}
        closeMobileMenu={closeMobileMenu}
      />
      <div className="p-[20px]">
        {menu.map((_menu, i) => {
          return (
            <a
              href={_menu.url}
              key={i}
              className="text-white block mb-[10px] last:mb-[0] uppercase text-[13px]"
              onClick={closeMobileMenu}
            >
              {_menu.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}

MobileMenu.propTypes = {
  menu: PropTypes.array.isRequired,
  isMobileMenuOut: PropTypes.bool.isRequired,
  closeMobileMenu: PropTypes.func.isRequired,
};
