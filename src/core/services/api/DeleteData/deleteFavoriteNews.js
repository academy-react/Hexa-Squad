import { toast } from "react-toastify";
import http from "../../interceptor";
export default async (id) => {
  try {
    let result = await toast.promise(
      http.delete("/News/DeleteFavoriteNews",  {deleteEntityId:id}),
      {
        pending: "در حال حذف کردن مقاله ",
      }
    );
    if (result.success) {
      toast.success("مقاله از لیست علاقه مندی ها حذف شد");
    } else {
      // toast.error("مقاله از لیست علاقه مندی ها حذف نشد");
      toast.error(result.message)
    }
    return false;
  } catch (error) {
    return true;
  }
};
