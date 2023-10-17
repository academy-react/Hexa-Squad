const SeparationPrice = (price)=>{
    const CategorizedPrice = price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return CategorizedPrice;
}
export default SeparationPrice;