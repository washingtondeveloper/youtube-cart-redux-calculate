export const formatPrice = (price) => {
  return Intl.NumberFormat("pt", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};
