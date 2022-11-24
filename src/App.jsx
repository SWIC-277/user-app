import Form from "./components/LoginRegistration";

function App() {
  return (
    <Form
      handleSubmit={(e) => {
        e.preventDefault();

        const fd = new FormData(e.target);
        const data = Object.fromEntries(fd);

        // TODO: Send data to server
        console.log(data);
      }}
    />
  );
}

export default App;
