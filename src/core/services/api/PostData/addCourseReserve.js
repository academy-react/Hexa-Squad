import { toast } from "react-toastify";
import { getProfile } from "../GetData/profile";
import http from "../../interceptor";

export const addReserve = async (id, isCourseReseve) => {
  const user = await getProfile();
  if (user == false) {
    showLoginModal.click();
  } else {
    if (isCourseReseve == "1") {
      console.log("isCourseReseve == 1", id);
      toast.error('این دوره از قبل در دوره های شما موجود است');
      // const result = await toast.promise(http.delete("/CourseReserve", id));
      // console.log(result);
      // if (result.success) {
      //   toast.success(result.message);
      // } else {
      //   toast.error(result.errors == null ? result.message : result.errors[0]);
      // }
    } else {
      console.log(id);
      const result = await toast.promise(
        http.post("/CourseReserve/ReserveAdd", { courseId: id }),
        {
          pending: "در حال اضافه کردن دوره ",
        }
      );
      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.errors == null ? result.message : result.errors[0]);
      }
      console.log(result);
      return true;
    }
  }
};
