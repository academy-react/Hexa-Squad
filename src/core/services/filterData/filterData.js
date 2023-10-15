import { date } from "yup";

const filterData = (data, setData) => {
  let category0 = document.getElementById("category0");
  let category1 = document.getElementById("category1");
  let category2 = document.getElementById("category2");
  let category3 = document.getElementById("category3");
  let category4 = document.getElementById("category4");
  let category5 = document.getElementById("category5");
  let category6 = document.getElementById("category6");
  let category7 = document.getElementById("category7");
  let category8 = document.getElementById("category8");
  let search = document.getElementById("search");
  let allCategory = true;
  let categoryValue0 = "";
  let categoryValue1 = "";
  let categoryValue2 = "";
  let categoryValue3 = "";
  let categoryValue4 = "";
  let categoryValue5 = "";
  let categoryValue6 = "";
  let categoryValue7 = "";
  let categoryValue8 = "";
  console.log(category2);
  console.log(data);
  if (category0.checked) {
    allCategory = false;
    console.log("category0 checked");
    categoryValue0 = "programming";
  } else if (category1.checked) {
    allCategory = false;
    console.log("category1 checked");
    categoryValue1 = "design";
  } else if (category2.checked) {
    allCategory = false;
    console.log("category2 checked");
    categoryValue2 = "React";
  } else if (category3.checked) {
    allCategory = false;
    console.log("category3 checked");
    categoryValue3 = "edit";
  } else if (category4.checked) {
    allCategory = false;
    categoryValue4 = "TypeScript";
  } else if (category5.checked) {
    allCategory = false;
    categoryValue5 = "Ruby";
  } else if (category6.checked) {
    allCategory = false;
    categoryValue6 = "Sass";
  } else if (category7.checked) {
    allCategory = false;
    categoryValue7 = "TailwindCss";
  } else if (category8.checked) {
    allCategory = true;
  }
  let filteredData = data.filter((item) => {
    return (
      (item.category == categoryValue8 ||
        item.category == categoryValue7 ||
        item.category == categoryValue6 ||
        item.category == categoryValue5 ||
        item.category == categoryValue4 ||
        item.category == categoryValue3 ||
        item.category == categoryValue2 ||
        item.category == categoryValue1 ||
        item.category == categoryValue0 ||
        allCategory) &&
      item.title.indexOf(search.value) != -1
    );
  });
  console.log(filteredData);
  setData(filteredData);
};

export default filterData;
