const filterData = (data,category,setData) => {
  let filteredData = data.filter((item) => {
    return (item.category == category);
  });
  setData(filteredData);
};

export default filterData;
