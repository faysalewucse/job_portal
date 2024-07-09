import ProductService from "../services/ProductService";
import showApiErrorMessage from "../utils/errorHandler";

export const getAllProducts = async ({ category, searchText }) => {
  try {
    const response = await ProductService.getAllProducts({
      category,
      searchText,
    });
    return response.data.payload || { products: [] };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return { products: [] }; // Return an empty array if no categories are found (404)
    } else {
      showApiErrorMessage(error);
      return { products: [] }; // Return an empty array for other errors as well
    }
  }
};

export const getProductBySlug = async (slug) => {
  const { data } = await ProductService.getProductBySlug(slug);
  return data.payload.product;
};
