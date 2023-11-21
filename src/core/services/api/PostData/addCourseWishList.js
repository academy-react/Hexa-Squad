import { toast } from "react-toastify";
import http from "../../interceptor";
import { getProfile } from "../GetData/profile";
import { calcLength } from "framer-motion";
import deleteFavoriteCourse  from "../DeleteData/deleteFavoriteCourse";

export const addWishList = async (id, isFavorite) => {
  const user = await getProfile();
  if (user == false) {
    showLoginModal.click();
  } else {
    if (isFavorite == 1) {
      deleteFavoriteCourse(id);
    } else {
      await toast.promise(
        http.post("/Course/AddCourseFavorite", { courseId: id }),
        {
          pending: "در حال اضافه کردن دوره ",
          success: "دوره به لیست علاقه مندی ها اضافه شد",
          error: "دوره به لیست علاقه مندی ها اضافه نشد",
        }
      );
      return true;
    }
  }
};
