import config from "@/config/config";
import axios from "axios";

// POST /api/auth/login
async function login({ email, password }) {
  const response = await axios.post(`${config.apiUrl}/api/auth/login`, {
    email,
    password,
  });

  return response.data;
}

async function signup({ name, email, password, confirmPassword }) {
  const response = await axios.post(`${config.apiUrl}/api/auth/register`, {
    name,
    email,
    password,
    confirmPassword,
  });

  return response.data;
}

export { login, signup };
