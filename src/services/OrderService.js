import api from "../api/api";
import API_ENDPOINTS from "../config/apiEndpoints";

const placeOrder = async (orderInfo) => {
  return await api.post(API_ENDPOINTS.ORDERS, orderInfo);
};

export default {
  placeOrder,
};
