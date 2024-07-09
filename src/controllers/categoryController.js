import CategoryService from "../services/CategoryService";
import { showApiErrorMessage } from "../utils/errorHandler";

export const getAllCategories = async () => {
  try {
    const response = await CategoryService.getAllCategories();
    return response.data.payload.categories || [];
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return []; // Return an empty array if no categories are found (404)
    } else {
      showApiErrorMessage(error);
      return []; // Return an empty array for other errors as well
    }
  }
};
