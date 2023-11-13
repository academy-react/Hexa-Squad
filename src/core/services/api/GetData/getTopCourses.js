import axios from "axios";
import Http from "../../interceptor";

const fetchData = async (Count , setCoursesList) => {
  try {
    const result = await Http.get(
      "/Home/GetCoursesTop?Count=" + Count
    );
    setCoursesList(result);
  } catch (error) {
    console.log(error);
  }
};
export default fetchData;
