import http from "../../interceptor";
import { toast } from "react-toastify";
import { getProfile } from "../GetData/profile";
import GetCourseDetails from "../GetData/getCourseDetailsById";

const handleCourseAddLike = async (courseId,likeCount, changeLikeColor, setChangeLikeColor, setData) => {
  const user = await getProfile();
  if (user == false) {
    showLoginModal.click();
  } else {
      try {
        const result = await http.post(`/Course/AddCourseLike?CourseId=${courseId}`);
        if (result.success == true) {
          toast.success(result.message)
          setChangeLikeColor(!changeLikeColor);
          GetCourseDetails(courseId, setData)
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