import PropTypes from "prop-types";
import { Input } from "./forms";

const fields = [
  {
    id: "firstName",
    label: "First Name",
    type: "text",
  },
  {
    id: "lastName",
    label: "Last Name",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "password",
    label: "Password",
    minLen: 8,
    type: "password",
  },
];

function LoginRegistration({ handleSubmit }) {
  return (
    <form
      className="w-max mx-auto flex flex-col gap-y-4 border p-8 rounded-md my-4"
      onSubmit={handleSubmit}
    >
      {fields.map((field) => (
        <Input key={field.id} {...field} />
      ))}

      <button
        type="submit"
        className="px-4 py-2 rounded bg-green-500 text-white"
      >
        Register
      </button>
    </form>
  );
}

LoginRegistration.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginRegistration;
