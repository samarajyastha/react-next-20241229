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

export { login };
