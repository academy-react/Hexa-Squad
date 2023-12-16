import http from "../../interceptor";
import { toast } from "react-toastify";
import { getProfile } from "../GetData/profile";
import GetNewsDetails from "../GetData/getNewsData/getNewsDetailsById";

const DeleteNewsDissLike = async (newsLikeId, changeDisLikeColor, setChangeDisLikeColor, id, setData) => {
  const user = await getProfile();
  if (user == false) {
    showLoginModal.click();
  } else {
        try {
            const result = await http.delete("/News/DeleteLikeNews",{data:{deleteEntityId: newsLikeId}});
            if (result.success == false) {
                toast.success("دیسلایک این خبر با موفقیت حذف شد")
                setChangeDisLikeColor(!changeDisLikeColor);
                GetNewsDetails(id, setData)
            } else {
                toast.error(result.message)
            }
            } catch (error) {
            console.error(error);
        }
    }
};
export default DeleteNewsDissLike;