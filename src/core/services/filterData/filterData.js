const filterData = (data, category, setData) => {
  let filteredData = data.filter((item) => {
    return item.category == category;
  });
  if (category == "") {
    setData(data)
  } else {
    setData(filteredData);
  }
};

export default filterData;
