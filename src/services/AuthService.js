import api from "../api/api";
import API_ENDPOINTS from "../config/apiEndpoints";

const getProfile = async (token) => {
  return await api.get(`${API_ENDPOINTS.AUTH.PROFILE}/${token}`);
};

export default {
  getProfile,
};
