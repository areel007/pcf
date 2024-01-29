import PropTypes from "prop-types"

export default function IconClose({icon__style, closeMobileMenu}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={icon__style}
      viewBox="0 0 512 512"
      onClick={closeMobileMenu}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M368 368L144 144M368 144L144 368"
      />
    </svg>
  );
}

IconClose.propTypes = {
  icon__style: PropTypes.string,
  closeMobileMenu: PropTypes.func.isRequired
}


