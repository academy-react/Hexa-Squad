import http from "../../interceptor";
import { getProfile } from "../GetData/profile";

export const addWishList = async (id, isLogin) => {
  const user = await getProfile();
  if (user == false) {
    showLoginModal.click();
  } else {
    let result = await http.post("/Course/AddCourseFavorite", {courseId:id});
    console.log(result)
  }
};
