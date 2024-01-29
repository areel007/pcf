import PhoneInput from "react-phone-number-input/input";
import PropTypes from "prop-types";
import "react-phone-number-input/style.css";

export default function Phone({ value, handleChange }) {
  return (
    <div className="shadow">
      <PhoneInput
        country="NG"
        placeholder="Enter your number"
        value={value}
        onChange={handleChange}
        className="w-full h-full p-[15px]"
      />
    </div>
  );
}

Phone.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
