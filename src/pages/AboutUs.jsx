import { useEffect, useState } from "react";
import style from "../assets/css.module/general.module.css";

export default function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    // Function to change the current index automatically after every 3 seconds
    const autoplay = setInterval(() => {
      if (currentIndex > 2) {
        setCurrentIndex(0);
      }
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 5000);

    return () => {
      clearInterval(autoplay); // Clean up the interval when the component unmounts
    };
  }, [currentIndex]);

  return (
    <>
      {/* Hero */}
      <div>
        {currentIndex === 1 ? (
          <section className="h-[350px] md:h-[100vh] w-[100%] bg-about-hero-1-mobile md:bg-about-hero-1 bg-cover">
            <div className="w-[90%] xl:w-[1200px] h-full mx-auto">
              <div className="w-full h-full flex flex-col justify-center">
                <h1 className="text-center text-white text-[30px] md:text-[60px] font-[700] leading-[1]">
                  Welcome to Peculiar Cocktails{" "}
                  <br className="hidden md:block" /> & Finger Foods!
                </h1>
              </div>
            </div>
          </section>
        ) : (
          <section className="h-[350px] md:h-[100vh] w-[100%] bg-about-hero-2-mobile md:bg-about-hero-2 bg-cover">
            <div className="w-[90%] xl:w-[1200px] h-full mx-auto">
              <div className="w-full h-full flex flex-col justify-center">
                <h1 className="text-center text-white text-[30px] md:text-[60px] font-[700] leading-[1]">
                  Welcome to Peculiar Cocktails{" "}
                  <br className="hidden md:block" /> & Finger Foods!
                </h1>
              </div>
            </div>
          </section>
        )}
      </div>

      {/*  */}
      <section className="py-[40px]">
        <div className="w-[90%] xl:w-[1200px] mx-auto text-[#272727]">
          <p className="text-[20px] md:text-[22px] font-[300] mb-[20px] md:mb-[40px]">
            Discover a one-of-a-kind dining experience that blends creativity
            and flavors. At Peculiar Cocktails and Finger Foods, we are
            passionate about crafting exceptional cocktails and delectable
            finger foods, setting us apart as a go-to destination for memorable
            moments of delightful indulgence.
          </p>

          <div className="mb-[20px] md:mb-[40px]">
            <h3 className="text-[#c11111] font-[500] text-[16px] md:text-[24px] mb-[10px]">
              Our story
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_500px] gap-[20px] md:gap-[40px]">
              <div>
                <p className="text-[14px] md:text-[16px] leading-[1.5]">
                  At Peculiar Cocktails and Finger Foods, our journey began with
                  a simple vision: to create a space where people can unwind,
                  socialize, and savor extraordinary culinary delights. <br />
                  <br /> Inspired by the artistry of mixology and the art of
                  crafting finger foods, we set out to create an establishment
                  that captures the essence of both worlds. <br />
                  <br /> Our founders, a team of seasoned mixologists and
                  culinary enthusiasts, joined forces to establish Peculiar
                  Cocktails and Finger Foods with the aim of offering an
                  unmatched gastronomic adventure. <br />
                  <br /> We embarked on a mission to explore unique flavor
                  combinations, handpicked ingredients, and creative
                  presentations to redefine the traditional cocktail and finger
                  food experience.
                </p>
              </div>
              <div className="w-full h-[250px] md:h-[300px]">
                <img src="https://res.cloudinary.com/dpp5z9ik2/image/upload/v1690593686/pcfandmore/story_fzo43d.jpg" alt="peculiar cocktails and fingerfoods" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="mb-[20px] md:mb-[40px]">
            <h3 className="text-[#c11111] font-[500] text-[16px] md:text-[24px] mb-[10px]">
              Our philosophy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-[500px_1fr] gap-[20px] md:gap-[40px]">
              <div
                className={`w-full h-[250px] md:h-[300px] ${style.reverse}`}
              >
                <img src="https://res.cloudinary.com/dpp5z9ik2/image/upload/v1690593980/pcfandmore/philosophy_o2qani.jpg" alt="peculiar cocktails and fingerfoods" className="w-full h-full object-cover" />
              </div>
              <div className="">
                <p className="text-[14px] md:text-[16px] leading-[1.5]">
                  Quality, innovation, and a touch of peculiarity define our
                  culinary philosophy. Every cocktail we mix and every finger
                  food we serve is a product of meticulous attention to detail,
                  ensuring that every sip and bite take your taste buds on a
                  journey of delightful surprises. <br />
                  <br />
                  We believe that a great cocktail not only quenches your thirst
                  but also tells a story. Our mixologists craft each cocktail
                  with passion, using premium spirits, fresh fruits, and
                  house-made syrups to create libations that are as visually
                  captivating as they are delicious. Whether it is a classic
                  concoction with a twist or an entirely original creation, our
                  cocktails are designed to ignite your senses and leave you
                  craving more. <br />
                  <br />
                  When it comes to our finger foods, we embrace diversity and
                  creativity to present an array of small bites that perfectly
                  complement our cocktails. From savory delights to tantalizing
                  treats, our finger foods are a feast for the eyes and a party
                  for your palate.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-[20px] md:mb-[40px]">
            <h3 className="text-[#c11111] font-[500] text-[16px] md:text-[24px] mb-[10px]">
              Our commitment
            </h3>
            <div className="grid grid-cols-1 gap-[20px] md:gap-[40px]">
              <div>
                <p className="text-[14px] md:text-[16px] leading-[1.5]">
                  At Peculiar Cocktails and Finger Foods, we are committed to
                  excellence in every aspect of our offerings. From using
                  high-quality ingredients to delivering exceptional customer
                  service, we strive to exceed your expectations with every
                  visit. <br />
                  <br />
                  Come, be a part of our peculiar family, and embark on a
                  journey of flavors, creativity, and camaraderie. Join us at
                  Peculiar Cocktails and Finger Foods, where every cocktail and
                  every finger food is an experience like no other. <br />
                  <br />
                  Cheers to peculiarity!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
