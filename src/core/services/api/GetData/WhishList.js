import Http from "../../interceptor";
const fetchWhishListCoursesApi = async (setData, setAllData) => {
  try {
    const result = await Http.get(
      `/SharePanel/GetMyFavoriteCourses`
    );
    try {
      setData(result.favoriteCourseDto);
      setAllData(result.favoriteCourseDto);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
export default fetchWhishListCoursesApi;
