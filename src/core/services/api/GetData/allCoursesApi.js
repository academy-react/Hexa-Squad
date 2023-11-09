import axios from "axios";
// get courses data from api and fetch on data variable
const fetchCoursesApi =  async (setData ,pageCount,countInPage,setAllData) => {
  try {
    const result = await axios.get(
      `https://api-academy.iran.liara.run/api/Home/GetCoursesWithPagination?PageNumber=${pageCount}&RowsOfPage=${countInPage}&SortingCol=Active&SortType=DESC&TechCount=0`
    );
    try {
      setData(result.data.courseFilterDtos);
      setAllData(result.data.courseFilterDtos);
      console.log('the data get from api in allCoursesApi.js',result.data.courseFilterDtos);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
export default fetchCoursesApi;
