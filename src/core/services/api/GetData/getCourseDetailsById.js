import http from "../../interceptor";

const GetCourseDetails = async (id, setData) => {
    try {
      const result = await http.get(
        `/Home/GetCourseDetails?CourseId=` +
          id
      );
      setData(result);
    } catch (error) {}
  }
export default GetCourseDetails;