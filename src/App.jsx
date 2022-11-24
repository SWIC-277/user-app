import Form from "./components/LoginRegistration";
import apiService from "./services/api.service";

function App() {
  return (
    <Form
      handleSubmit={async (e) => {
        e.preventDefault();

        const fd = new FormData(e.target);
        const newUser = Object.fromEntries(fd);

        const results = await apiService.add(newUser);
        console.log(results);
      }}
    />
  );
}

export default App;
