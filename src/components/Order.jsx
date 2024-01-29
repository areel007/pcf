import PropTypes from "prop-types";
import IconClose from "./icons/Icon.Close";
import styles from "../assets/css.module/icon.module.css";

export default function Order({
  product,
  clientName,
  clientEmail,
  clientPhone,
  showOrderForm,
  handleClientName,
  handleClientEmail,
  handleClientPhone,
  handleCloseOrderForm,
  handleProductOrder,
  handleClearOrderForm
}) {
  return (
    <div
      className={`fixed right-0 left-0 top-0 bottom-0 z-[100] transition ${
        showOrderForm ? "translate-x-[0]" : "translate-x-[-100%]"
      }`}
    >
      <div className="w-full h-full md:w-[400px] bg-[#fff] shadow-md p-[20px] relative">
        <IconClose
          icon__style={styles.icon__close}
          closeMobileMenu={handleCloseOrderForm}
        />
        <h2 className="mb-[40px] text-[24px] font-[600]">Place your order</h2>

        <form
          action="https://formsubmit.co/Peculiarcocktailsfingerfoods90@gmail.com"
          className="w-full grid gap-[20px]"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value={`New order from ${clientName}`}
          />

          <input
            type="text"
            readOnly
            value={product?.name}
            className="p-[15px] shadow"
            name="product"
          />

          <input
            type="text"
            readOnly
            value={`\u20A6${product?.price}`}
            className="p-[15px] shadow"
            name="price"
          />

          <input
            type="text"
            placeholder="Enter your name"
            value={clientName}
            onChange={handleClientName}
            className="p-[15px] shadow"
            required
          />

          <input
            type="text"
            placeholder="Enter your email"
            value={clientEmail}
            onChange={handleClientEmail}
            className="p-[15px] shadow"
            name="email"
          />

          <input
            type="text"
            placeholder="Enter your phone"
            value={clientPhone}
            onChange={handleClientPhone}
            className="p-[15px] shadow"
            name="phone"
          />

          <input type="hidden" name="_next" value="https://pcfandmore.netlify.app" />
          <button type="submit" className="p-[15px] bg-[#c11111] text-white" onClick={handleProductOrder}>
            Order
          </button>
          <p className="text-[#c11111] underline cursor-pointer" onClick={handleClearOrderForm}>Clear cart</p>
        </form>
      </div>
    </div>
  );
}

Order.propTypes = {
  product: PropTypes.object,
  clientName: PropTypes.string,
  clientEmail: PropTypes.string,
  clientPhone: PropTypes.string,
  showOrderForm: PropTypes.bool,
  handleProductNameChange: PropTypes.func,
  handleClientName: PropTypes.func,
  handleClientEmail: PropTypes.func,
  handleClientPhone: PropTypes.func,
  handleCloseOrderForm: PropTypes.func,
  handleProductOrder: PropTypes.func,
  handleClearOrderForm: PropTypes.func,
};
