const cartMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();
  const cartActions = [
    "cart/addToCart",
    "cart/removeFromCart",
    "cart/increaseProductQuantity",
    "cart/decreaseProductQuantity",
  ];

  if (cartActions.includes(action.type)) {
    const cartItems = state.cart.cartItems;
    localStorage.setItem("cart", JSON.stringify(cartItems));
    store.dispatch({ type: "cart/updateOrderSummary" });
  }

  return result;
};

export default cartMiddleware;
