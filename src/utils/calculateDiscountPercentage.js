export const calculateDiscountPercentage = (originalPrice, offerPrice) => {
  if (originalPrice <= 0 || offerPrice < 0) {
    return 0;
  }

  const discountAmount = originalPrice - offerPrice;
  const discountPercentage = (discountAmount / originalPrice) * 100;

  return Math.ceil(discountPercentage);
};
