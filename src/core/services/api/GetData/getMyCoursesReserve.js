import Http from "../../interceptor";
const fetchMyCoursesReserve = async (setData, setAllData) => {
  try {
    const result = await Http.get(
      `/SharePanel/GetMyCoursesReserve`
    );
    try {
      setData(result);
      setAllData(result);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
export default fetchMyCoursesReserve;
