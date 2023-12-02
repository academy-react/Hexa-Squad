import { toast } from "react-toastify";
import http from "../../interceptor";
import { getProfile } from "../GetData/profile";
import deleteFavoriteCourse from "../DeleteData/deleteFavoriteCourse";

export const addWishList = async (id, isFavorite) => {
  const user = await getProfile();
  if (user == false) {
    showLoginModal.click();
    return false;
  } else {
    if (isFavorite == 1 || isFavorite) {
      deleteFavoriteCourse(id);
    } else {
      const result = await toast.promise(
        http.post("/Course/AddCourseFavorite", { courseId: id }),
        {
          pending: "در حال اضافه کردن دوره ",
          // success: "دوره به لیست علاقه مندی ها اضافه شد",
          // error: "دوره به لیست علاقه مندی ها اضافه نشد",
        }
      );
      if(result.success) {
        toast.success(result.message);
      }
      else {
        toast.error(result.message);
      }
      return true;
    }
  }
};
