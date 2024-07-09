export const getProductCurrentPrice = (product) => {
  if (!product.offerPrice || product.offerPrice === product.price)
    return product.price;
  else if (product.offerPrice < product.price) {
    return product.offerPrice;
  }
  return product.price;
};
