const SeparationPrice = (price) => {
  const reducer = Intl.NumberFormat("fa", {
    notation: "compact",
  });
  const newPrice = reducer.format(price);
  //   price = String(price);
  //   const CategorizedPrice = price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //   return price
  return newPrice;
};
export default SeparationPrice;
