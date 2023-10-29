const filterData = (data, category, setData,setCheckedData) => {
  let filteredData = data.filter((item) => {
    return item.category == category;
  });
  if (category == "") {
    setData(data);
    setCheckedData('')
  } else {
    setData(filteredData);
    setCheckedData(category)
  }
};

export default filterData;
