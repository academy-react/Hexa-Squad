import http from "../../interceptor";
import { toast } from "react-toastify";
import { getProfile } from "../GetData/profile";

const handleNewsDeleteLike = async (newsLikeId, changeLikeColor, setChangeLikeColor) => {
  const user = await getProfile();
  if (user == false) {
    showLoginModal.click();
  } else {
        try {
            const result = await http.delete("/Course/DeleteCourseLike/",{data:{newsLikeId: newsLikeId}});
            if (result.success == true) {
                toast.success("لایک این خبر با موفقیت حذف شد")
                setChangeLikeColor(!changeLikeColor);
            } else if (result.success == false) {
                toast.error(result.message)
            }
            } catch (error) {
            console.error(error);
        }
    }
};
export default handleNewsDeleteLike;