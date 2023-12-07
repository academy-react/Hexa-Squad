import { toast } from "react-toastify";
import http from "../../interceptor";
export default async (id) => {
  const obj = {
    deleteEntityId: id,
  };
  try {
    console.log("id", id);
    let result = await toast.promise(
      http.delete("/News/DeleteFavoriteNews", { data: obj }),
      {
        pending: "در حال حذف کردن مقاله ",
      }
    );
    console.log(result);
    if (result.message === "عملیات با موفقیت انجام شد.") {
      toast.success("مقاله از لیست علاقه مندی ها حذف شد");
    } else {
      // toast.error("مقاله از لیست علاقه مندی ها حذف نشد");
      toast.error(result.message);
    }
    return result;
  } catch (error) {
    return false;
  }
};
