const GregorianToSolar = (date)=>{
    const year = date.slice(0, 4 );
    const month = date.slice(5, 7 );
    const day = date.slice(8, 10 );
    const newDate = new Date(year, month, day)
    return new Intl.DateTimeFormat('fa-IR').format(newDate);
}
export default GregorianToSolar;