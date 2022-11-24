import InputType from "@types/Input";
import capitalize from "lodash.capitalize";

function Input({ id, isReq, label, minLen, maxLen, placeholder, type }) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label || capitalize(id)}
      </label>
      <input
        id={id}
        minLength={minLen}
        maxLength={maxLen}
        placeholder={placeholder || label || capitalize(id)}
        required={isReq || true}
        type={type || "text"}
        className="px-4 py-2 rounded border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
      />
    </div>
  );
}

Input.propTypes = InputType;

export default Input;
