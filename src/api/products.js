import config from "@/config/config";
import axios from "axios";
import { authToken } from "./api";

async function getAllProducts() {
  const response = await axios.get(
    `${config.apiUrl}/api/products?limit=100&sort={"createdAt":-1}`
  );

  return response.data;
}

// baseUrl/api/products/:id
async function getProductById(id) {
  const response = await axios.get(`${config.apiUrl}/api/products/${id}`);

  return response.data;
}

async function addProduct(data) {
  const response = await axios.post(`${config.apiUrl}/api/products`, data, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.data;
}

async function editProduct(id, data) {
  const response = await axios.put(
    `${config.apiUrl}/api/products/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  return response.data;
}

export { getAllProducts, getProductById, addProduct, editProduct };

/**
 * HTTP Methods
 * 1. GET - Read
 * 2. POST - Create
 * 3. PUT - Update
 * 4. DELETE - Delete
 */
