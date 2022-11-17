import PropTypes from "prop-types";

export default function Input({ label }) {
  return (
    <div>
      <label htmlFor={label} className="sr-only">
        {label}
      </label>
      <input id={label} className="border rounded pl-2" placeholder={label} />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
};
