import { useEffect, useState } from "react";
import styles from "../assets/css.module/hero.module.css";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    // Function to change the current index automatically after every 3 seconds
    const autoplay = setInterval(() => {
      if (currentIndex > 3) {
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
      {currentIndex === 1 ? (
        <section className="h-[350px] md:h-[100vh] w-[100%] bg-hero-bg-mobile md:bg-hero-bg">
          <div className="w-[90%] xl:w-[1200px] h-full mx-auto">
            <div className="w-full h-full flex flex-col justify-center">
              <h1 className={styles.h1}>
                Cheers to <br /> Quirkiness
              </h1>
            </div>
          </div>
        </section>
      ) : currentIndex===2 ? (
        <section className="h-[350px] md:h-[100vh] w-[100%] bg-hero-bg-2-mobile md:bg-hero-2-bg bg-cover">
          <div className="w-[90%] xl:w-[1200px] h-full mx-auto">
            <div className="w-full h-full flex flex-col justify-center">
              <h1 className={styles.h1}>
                Unleash your tastebuds
              </h1>
            </div>
          </div>
        </section>
      ): (
        <section className="h-[350px] md:h-[100vh] w-[100%] bg-hero-bg-2-mobile md:bg-hero-2-bg bg-cover">
          <div className="w-[90%] xl:w-[1200px] h-full mx-auto">
            <div className="w-full h-full flex flex-col justify-center">
              <h1 className={styles.h1}>
                Events & Gallery
              </h1>
              <button className="p-[10px] bg-white">Click to view gallery</button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
