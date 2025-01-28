import config from "@/config/config";
import authToken from "@/constants/authToken";
import axios from "axios";

async function createOrder(data) {
  const response = await axios.post(`${config.apiUrl}/api/orders`, data, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.data;
}
export { createOrder };
