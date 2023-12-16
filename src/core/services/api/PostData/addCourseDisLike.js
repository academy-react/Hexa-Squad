import http from "../../interceptor";
import { toast } from "react-toastify";
import { getProfile } from "../GetData/profile";
import GetCourseDetails from "../GetData/getCourseDetailsById";

const handleCourseDisLike = async (courseId, changeDisLikeColor, setChangeDisLikeColor, setData) => {
  const user = await getProfile();
  if (user == false) {
    showLoginModal.click();
  } else {
      try {
        const result = await http.post(`/Course/AddCourseDissLike?CourseId=${courseId}`);
        if (result.success == true) {
          toast.success(result.message)
          setChangeDisLikeColor(!changeDisLikeColor);
          GetCourseDetails(courseId, setData)
        } else if (result.success == false) {
          toast.error(result.message)
        }
      } catch (error) {
        console.error(error);
      }
    }
};

export default handleCourseDisLike;