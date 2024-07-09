export const hasOffer = (size) => {
  if (!size.offerPrice || size.offerPrice === size.price) return false;
  return size.offerPrice < size.price;
};
