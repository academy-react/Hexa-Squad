import http from "../../interceptor";
import { toast } from "react-toastify";
import { getProfile } from "../GetData/profile";

const handleCourseAddLike = async (courseId,likeCount, changeLikeColor, setChangeLikeColor) => {
  const user = await getProfile();
  if (user == false) {
    showLoginModal.click();
  } else {
      try {
        const result = await http.post(`/Course/AddCourseLike?CourseId=${courseId}`);
        if (result.success == true) {
          toast.success(result.message)
          setChangeLikeColor(!changeLikeColor);
        //   setNewLikeCount(likeCount+1)
        } else if (result.success == false) {
          toast.error(result.message)
        }
      } catch (error) {
        console.error(error);
      }
    }
};

export default handleCourseAddLike;