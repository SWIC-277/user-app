const BASE_URL = "http://localhost:3001/users";

export default {
  async add(user) {
    const response = await fetch(BASE_URL, {
      // Use POST to create a new user
      method: "POST",
      headers: {
        // Tell the server we're sending JSON
        "Content-Type": "application/json",
      },

      // Convert the user object to JSON
      body: JSON.stringify(user),
    });

    return response.json();
  },
};
