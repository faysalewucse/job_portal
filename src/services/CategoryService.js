import api from "../api/api";
import API_ENDPOINTS from "../config/apiEndpoints";

const getAllCategories = async () => {
  return await api.get(API_ENDPOINTS.CATEGORIES);
};

export default {
  getAllCategories,
};
