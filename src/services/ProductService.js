import api from "../api/api";
import API_ENDPOINTS from "../config/apiEndpoints";

const getAllProducts = async ({ category, searchText }) => {
  return await api.get(
    `${API_ENDPOINTS.PRODUCTS}?category=${category}&search=${searchText}`
  );
};

const getProductBySlug = async (slug) => {
  return await api.get(`${API_ENDPOINTS.PRODUCTS}/single/${slug}`);
};

export default {
  getAllProducts,
  getProductBySlug,
};
