const BASE_URL = "http://localhost:3001/users";

export default {
  // Any function/method marked as 'async' will return a Promise
  async getAllUsers() {
    // This is a promise that wraps the raw Response object
    const response = await fetch(BASE_URL);

    // This is a promise that wraps the parsed JSON object
    return response.json();
  },
};
