import Jenny from "../assets/images/jenny.jpeg";
import PcfImg1 from "../assets/images/pcf-img-1.jpeg";
import PcfImg2 from "../assets/images/pcf-img-2.jpeg";
import PcfImg4 from "../assets/images/pcf-img-4.jpeg";
import PcfImg5 from "../assets/images/pcf-img-5.jpeg";
import PcfImg6 from "../assets/images/pcf-img-6.jpeg";
import PcfImg7 from "../assets/images/pcf-img-7.jpeg";
import PcfImg8 from "../assets/images/pcf-img-8.jpeg";

export default function Gallery() {
  return (
    <div>
      <div className="h-[70px] md:h-[110px] bg-[#A90A04]"></div>
      <div className="grid grid-cols-1 gap-[5px]">
        <img
          src={Jenny}
          alt="peculiar cocktails"
          className="w-full object-cover"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[5px]">
          <img
            src={PcfImg1}
            alt="peculiar cocktails"
            className="w-full object-cover"
          />
          <img
            src={PcfImg2}
            alt="peculiar cocktails"
            className="w-full object-cover"
          />
          <img
            src={PcfImg4}
            alt="peculiar cocktails"
            className="w-full object-cover"
          />
        </div>
        <img
          src={PcfImg5}
          alt="peculiar cocktails"
          className="w-full object-cover"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[5px]">
          <img
            src={PcfImg6}
            alt="peculiar cocktails"
            className="w-full object-cover h-full"
          />
          <img
            src={PcfImg7}
            alt="peculiar cocktails"
            className="w-full object-cover h-full"
          />
          <img
            src={PcfImg8}
            alt="peculiar cocktails"
            className="w-full object-cover h-full"
          />
        </div>
      </div>
    </div>
  );
}
