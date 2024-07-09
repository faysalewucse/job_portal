import { getProductCurrentPrice } from "./getProductCurrentPrice";

export const calculateOrderSummary = (cartItems, deliveryCharge = 0) => {
  const subTotal = cartItems.reduce(
    (total, item) => total + getProductCurrentPrice(item) * item.quantity,
    0
  );
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return {
    subTotal,
    totalQuantity,
    deliveryCharge,
    finalPrice: subTotal + deliveryCharge,
  };
};
