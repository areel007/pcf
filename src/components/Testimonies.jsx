import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Testimonies() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    draggable: true,
    focusOnSelect: true,
    pauseOnHover: true,
    arrows: false,
    autoplaySpeed: 10000,
  };
  return (
    <Slider {...settings}>
      <div className="text-white w-full !flex justify-center">
        <div className="w-full md:w-[500px] flex flex-col justify-center items-center gap-[20px]">
          <div className="w-[100px] h-[100px] rounded-full bg-[#ff0000]"></div>
          <p className="text-center text-[14px]">
            &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            reiciendis error nisi. Veniam eius cum ducimus aspernatur enim
            porro, a, consequuntur illum aliquam temporibus officia.&quot;
          </p>
        </div>
      </div>

      <div className="text-white w-full !flex justify-center">
        <div className="w-full md:w-[500px] flex flex-col justify-center items-center gap-[20px]">
          <div className="w-[100px] h-[100px] rounded-full bg-white"></div>
          <p className="text-center text-[14px]">
            &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            reiciendis error nisi. Veniam eius cum ducimus aspernatur enim
            porro, a, consequuntur illum aliquam temporibus officia.&quot;
          </p>
        </div>
      </div>
    </Slider>
  );
}
