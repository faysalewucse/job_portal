import OrderService from "../services/OrderService";
import showApiErrorMessage from "../utils/errorHandler";

export const placeOrder = async (orderInfo) => {
  try {
    await OrderService.placeOrder(orderInfo);
  } catch (error) {
    showApiErrorMessage(error);
  }
};
