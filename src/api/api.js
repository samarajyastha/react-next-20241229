import axios from "axios";

// HTTP Methods
// GET, POST (create), PUT (update), DELETE

async function fetchProducts() {
  const response = await axios.get(
    "https://node-20240823.vercel.app/api/products"
  );

  return response.data;
}

export { fetchProducts };

// loading, success, failure


// backend url: api.my-project.com CORS: allow other-project.com
// frontend url: app.my-project.com
// frontend2 url : app.other-project.com
