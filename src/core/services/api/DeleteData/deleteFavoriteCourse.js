import { toast } from "react-toastify";
import http from "../../interceptor";
export default async (id) => {
  try {
    let result = await toast.promise(
      http.delete("/Course/DeleteCourseFavorite",  {data:{CourseFavoriteId:id} , headers:{"Content-Type":'multipart/form-data'}}),
      {
        pending: "در حال حذف کردن دوره ",
      }
    );
    if (result.success) {
      toast.success("دوره از لیست علاقه مندی ها حذف شد");
    } else {
      toast.error("دوره از لیست علاقه مندی ها حذف نشد");
    }
    return false;
  } catch (error) {
    return true;
  }
};
