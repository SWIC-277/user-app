const BASE_URL = "http://localhost:3001/users";

export default {
  async login(user, pass) {
    const response = await fetch(BASE_URL);

    const usersData = await response.json();

    // TODO: Resolve or reject a promise
    return usersData.find((u) => u.username === user && u.password === pass);
  },
};
