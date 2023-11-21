import Http from "../../interceptor";
// get courses data from api and fetch on data variable
const fetchCoursesApi = async (
  setData,
  pageCount,
  countInPage,
  setAllData,
  filterObj
) => {
  try {
    const result = await Http.get(
      `/Home/GetCoursesWithPagination?PageNumber=${pageCount}&RowsOfPage=${countInPage}`,
      { params: filterObj }
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
