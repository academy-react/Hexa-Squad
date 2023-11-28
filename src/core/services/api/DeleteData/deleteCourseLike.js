import http from "../../interceptor";
import { toast } from "react-toastify";
import { getProfile } from "../GetData/profile";
import onFormData from "../FormData";

const handleCourseDeleteLike = async (userLikeId, changeLikeColor, setChangeLikeColor) => {
  const user = await getProfile();
  if (user == false) {
    showLoginModal.click();
  } else {
        try {
            const obj = {
                userLikeId: userLikeId
            }
            const data = onFormData(obj)
            // let data = new FormData();
  
            // data.append("userLikeId", userLikeId);
            // console.log("data=",data)

            const result = await http.delete("/Course/DeleteCourseLike", data);
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