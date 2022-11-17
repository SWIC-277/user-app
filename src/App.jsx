import { useEffect, useState } from "react";
import apiService from "./services/api.service";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    apiService.getAllUsers().then((users) => setUsers(users));
  });

  return (
    <>
      <h1 className="heading">Hello World</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
