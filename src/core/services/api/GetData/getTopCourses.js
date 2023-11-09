import axios from "axios";

const fetchData = async (Count , setCoursesList) => {
  try {
    const result = await axios.get(
      "https://api-academy.iran.liara.run/api/Home/GetCoursesTop?Count=" + Count
    );
    setCoursesList(result.data);
  } catch (error) {
    console.log(error);
  }
};
export default fetchData;
