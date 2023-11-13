const filterData = (data, category, setData,setCheckedData) => {
  let filteredData = data.filter((item) => {
    return item.newsCatregoryName == category;
  });
  console.log(data)
  if (category == "") {
    setData(data);
    setCheckedData('')
  } else {
    setData(filteredData);
    setCheckedData(category)
  }
};

export default filterData;
