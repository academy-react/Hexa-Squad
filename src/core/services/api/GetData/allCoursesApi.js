import axios from "axios";
import Http from "../../interceptor";
// get courses data from api and fetch on data variable
const fetchCoursesApi = async (setData, pageCount, countInPage, setAllData) => {
  try {
    const result = await Http.get(
      `Home/GetCoursesWithPagination?PageNumber=${pageCount}&RowsOfPage=${countInPage}&SortingCol=Active&SortType=DESC&TechCount=0`
    );
    try {
      setData(result.courseFilterDtos);
      setAllData(result.courseFilterDtos);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
export default fetchCoursesApi;
