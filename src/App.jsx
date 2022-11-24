import Form from "./components/LoginRegistration";

function App() {
  return (
    <Form
      handleSubmit={(e) => {
        e.preventDefault();
        console.log("Form submitted!");
      }}
    />
  );
}

export default App;
