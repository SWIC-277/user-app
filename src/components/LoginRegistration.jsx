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
    <form>
      {fields.map((field) => (
        <Input key={field.id} {...field} />
      ))}
    </form>
  );
}

LoginRegistration.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginRegistration;
