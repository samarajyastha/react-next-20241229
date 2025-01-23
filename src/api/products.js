import config from "@/config/config";
import axios from "axios";
import { authToken } from "./api";
import { formatSearchParams } from "@/helpers/formatParams";

async function getAllProducts(searchParams) {
  const query = formatSearchParams(searchParams);

  const response = await axios.get(`${config.apiUrl}/api/products?${query}`);

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

async function getProductsByCategory(category) {
  const response = await axios.get(
    `${config.apiUrl}/api/products/category/${category}`
  );

  return response.data;
}

async function getProductsByBrand(brand) {
  const response = await axios.get(
    `${config.apiUrl}/api/products/brand/${brand}`
  );

  return response.data;
}

async function getBrands() {
  const response = await axios.get(`${config.apiUrl}/api/products/brands`);

  return response.data;
}

async function getCategories() {
  const response = await axios.get(`${config.apiUrl}/api/products/categories`);

  return response.data;
}

export {
  getAllProducts,
  getProductById,
  addProduct,
  editProduct,
  getProductsByCategory,
  getProductsByBrand,
  getBrands,
  getCategories,
};

/**
 * HTTP Methods
 * 1. GET - Read
 * 2. POST - Create
 * 3. PUT - Update
 * 4. DELETE - Delete
 */
