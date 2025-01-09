import config from "@/config/config";
import axios from "axios";

async function getAllProducts() {
  const response = await axios.get(`${config.apiUrl}/api/products?limit=100`);

  return response.data;
}

export { getAllProducts };

/**
 * HTTP Methods
 * 1. GET - Read
 * 2. POST - Create
 * 3. PUT - Update
 * 4. DELETE - Delete
 */
