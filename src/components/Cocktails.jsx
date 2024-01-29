import PropTypes from "prop-types";
import numeral from "numeral";

export default function Cocktails({ card__details, select__product }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
      {card__details.map((card, i) => {
        return (
          <div
            className="rounded-[10px] hover:shadow-lg overflow-hidden cursor-pointer group"
            title="click to order"
            key={i}
            onClick={() => {
              select__product(card);
            }}
          >
            <div className="w-full h-[400px] overflow-hidden">
              {card.img.slice(-3) === "jpg" ? (
                <img
                  src={card.img}
                  alt="peculiar cocktails"
                  className="w-full h-full object-cover group-hover:scale-[1.1] transition"
                />
              ) : (
                <video
                  src={card.img}
                  alt="peculiar cocktails"
                  className="w-full h-full object-cover"
                  controls
                  muted
                />
              )}
            </div>
            <div className="p-[20px_10px] flex flex-col gap-[10px] items-start">
              <p className="text-[#c11111] font-[600] text-[22px]">
                {card.name} ---- &#x20A6;{numeral(card.price).format('0,0.00')}
              </p>
              <button className="p-[7px_20px] bg-[#c11111] inline-block mb-[10px] text-white rounded-full text-[12px]">
                Click to order
              </button>
              <p className="text-[14px] text-black">#drinks #cocktails #fingerfoods</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Cocktails.propTypes = {
  card__details: PropTypes.array.isRequired,
  select__product: PropTypes.func,
};
