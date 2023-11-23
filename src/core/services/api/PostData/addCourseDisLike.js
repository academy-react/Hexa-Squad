import http from "../../interceptor";
import { toast } from "react-toastify";
import { getProfile } from "../GetData/profile";

const handleCourseDisLike = async (courseId, changeDisLikeColor, setChangeDisLikeColor) => {
  const user = await getProfile();
  if (user == false) {
    showLoginModal.click();
  } else {
      try {
        const result = await http.post(`/Course/AddCourseDissLike?CourseId=${courseId}`);
        if (result.success == true) {
          toast.success(result.message)
          setChangeDisLikeColor(!changeDisLikeColor);
        } else if (result.success == false) {
          toast.error(result.message)
        }
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
};

export default handleCourseDisLike;