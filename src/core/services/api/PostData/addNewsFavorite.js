import { toast } from "react-toastify";
import http from "../../interceptor";
import { getProfile } from "../GetData/profile";

const addNewsFavorite = async (data) => {
  const user = await getProfile();
  if (user == false) {
    showLoginModal.click();
    return false;
  } else {
        const result = await toast.promise(
            http.post(`/News/AddFavoriteNews?NewsId=${data.id}`),
            {
            pending: "در حال اضافه کردن مقاله ",
            }
        );
        if(result.success) {
            toast.success(result.message);
        }
        else {
            toast.error("در لیست علاقمندی های شما موجود می باشد.");
        }
        return true;
    }
};
export default addNewsFavorite;