const SeparationPrice = (price)=>{
    price = String(price);
    const CategorizedPrice = price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return CategorizedPrice;
}
export default SeparationPrice;