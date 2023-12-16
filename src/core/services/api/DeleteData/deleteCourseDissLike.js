import http from "../../interceptor";
import { toast } from "react-toastify";
import { getProfile } from "../GetData/profile";
import onFormData from "../FormData";
import GetCourseDetails from "../GetData/getCourseDetailsById";

const DeleteCourseDissLike = async (
  userLikeId,
  changeDisLikeColor,
  setChangeDisLikeColor,
  courseId,
  setData
) => {
  const user = await getProfile();
  if (user == false) {
    showLoginModal.click();
  } else {
    try {
      const obj = {
        CourseLikeId: userLikeId,
      };
      const data = onFormData(obj);

      const result = await http.delete("/Course/DeleteCourseLike", {
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (result.success == true) {
        toast.success("دیسلایک این دوره با موفقیت حذف شد");
        setChangeDisLikeColor(!changeDisLikeColor);
        GetCourseDetails(courseId, setData)
      } else if (result.success == false) {
        toast.error(result.message);
      }
    } catch (error) {
      console.error(error);
    }
  }
};
export default DeleteCourseDissLike;
