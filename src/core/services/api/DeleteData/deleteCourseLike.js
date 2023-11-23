import http from "../../interceptor";
import { toast } from "react-toastify";
import { getProfile } from "../GetData/profile";

const handleCourseDeleteLike = async (userLikeId, changeLikeColor, setChangeLikeColor) => {
  const user = await getProfile();
  if (user == false) {
    showLoginModal.click();
  } else {
        try {
            const result = await http.delete("/Course/DeleteCourseLike", userLikeId);
            if (result.success == true) {
                toast.success("لایک این دوره با موفقیت حذف شد")
                setChangeLikeColor(!changeLikeColor);
            } else if (result.success == false) {
                toast.error(result.message)
            }
            console.log(result);
            } catch (error) {
            console.error(error);
        }
    }
};
export default handleCourseDeleteLike;