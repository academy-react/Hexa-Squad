import Http from "../../interceptor";
const fetchMyCoursesApi = async (setData, pageCount, countInPage, setAllData) => {
  try {
    const result = await Http.get(
      `/SharePanel/GetMyCourses?PageNumber=${pageCount}&RowsOfPage=${countInPage}&SortingCol=DESC&SortType=LastUpdate&Query=`
    );
    try {
      setData(result.listOfMyCourses);
      setAllData(result.listOfMyCourses);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
export default fetchMyCoursesApi;
