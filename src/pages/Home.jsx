import { Outlet, Link, useLocation } from "react-router-dom";
import Cocktail from "../components/icons/Cocktail";
// import Burger from "../components/icons/Burger";
// import Food from "../components/icons/Food";
import Styles from "../assets/css.module/icon.module.css";
import IG from "../components/icons/IG";
// import Twitter from "../components/icons/Twitter";
// import Facebook from "../components/icons/Facebook";
import Hero from "../components/Hero";
import Testimonies from "../components/Testimonies";

export default function Home() {
  const location = useLocation();

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Menu */}
      <section className="py-[50px]" id="menu">
        <div className="w-[90%] xl:w-[1200px] h-full mx-auto">
          <div className="mb-[40px] flex gap-[20px] justify-start md:justify-center">
            <Link
              to="/"
              className={`rounded shadow hover:shadow-md ${Styles.card} ${
                location.pathname === "/" ? Styles.card__active : null
              }`}
            >
              <Cocktail
                icon__style={`${Styles.icon__style} ${
                  location.pathname === "/" ? Styles.icon__active : null
                }`}
              />
            </Link>

            {/* <Link
              to="/sandwiches"
              className={`rounded shadow hover:shadow-md ${Styles.card} ${
                location.pathname === "/sandwiches" ? Styles.card__active : null
              }`}
            >
              <Burger
                icon__style={`${Styles.icon__style} ${
                  location.pathname === "/sandwiches"
                    ? Styles.icon__active
                    : null
                }`}
              />
            </Link>

            <Link
              to="/foods"
              className={`rounded shadow hover:shadow-md ${Styles.card} ${
                location.pathname === "/foods" ? Styles.card__active : null
              }`}
            >
              <Food
                icon__style={`${Styles.icon__style} ${
                  location.pathname === "/foods" ? Styles.icon__active : null
                }`}
              />
            </Link> */}
          </div>

          <Outlet />
        </div>
      </section>

      {/* Testimonies */}
      <section className="py-[50px] bg-black">
        <div className="w-[90%] xl:w-[1200px] h-full mx-auto">
          <Testimonies />
        </div>
      </section>

      {/* Contact us */}
      <section
        className="bg-contact-us-bg-mobile md:bg-contact-us-bg h-[auto] bg-fixed bg-cover py-[30px] md:py-[60px]"
        id="contact-us"
      >
        <div className="w-[90%] xl:w-[1200px] h-full mx-auto grid grid-cols-1 md:grid-cols-[60%_1fr_1fr] gap-[20px] md:gap-[40px] text-white">
          <div>
            <div className="mb-[20px]">
              <h3 className="font-[700] text-[16px] md:text-[18px] leading-[1] mb-[10px]">
                Peculiar Cocktails & Fingerfoods
              </h3>
              <p>
                Bakare Daudu Street
                <br />
                Gbagada, Lagos
              </p>
            </div>

            <div className="mb-[20px]">
              <h3 className="font-[700] text-[16px] md:text-[18px] leading-[1] mb-[10px]">
                Operation Time
              </h3>
              <p>
                5.00pm - 10.00pm <br /> Everyday of the week
              </p>
            </div>

            <div>
              <h3 className="font-[700] text-[16px] md:text-[18px] leading-[1] mb-[10px]">
                Telephone & Email
              </h3>
              <p>+234 906 193 5961</p>
              <p>Peculiarcocktailsfingerfoods90@gmail.com </p>
            </div>
          </div>

          <div>
            <h3 className="font-[700] text-[16px] md:text-[18px] leading-[1] mb-[10px]">
              Quick Links
            </h3>
            <div className="flex flex-col">
              <a href="/#menu" className="hover:underline w-[min-content]">
                Menu
              </a>
              <a href="/#order" className="hover:underline w-[min-content]">
                Order
              </a>
              <Link to="/" className="hover:underline w-[min-content]">
                FAQs
              </Link>
            </div>
          </div>

          <div className="flex gap-[20px]">
            <a
              href="https://instagram.com/pcfxlagosxng"
              target="_blank"
              rel="noreferrer"
            >
              <IG />
            </a>
            {/* <a href="https://instagram.com/pcfxlagosxng" target="_blank" rel="noreferrer">
              <Twitter />
            </a>
            <a href="https://instagram.com/pcfxlagosxng" target="_blank" rel="noreferrer">
              <Facebook />
            </a> */}
          </div>
        </div>
      </section>
    </>
  );
}
