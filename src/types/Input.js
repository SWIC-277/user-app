import PropTypes from "prop-types";

export default PropTypes.exact({
  id: PropTypes.string.isRequired,
  isReq: PropTypes.bool,
  label: PropTypes.string,
  minLen: PropTypes.number,
  maxLen: PropTypes.number,
  placeholder: PropTypes.string,
  type: PropTypes.string,
});
