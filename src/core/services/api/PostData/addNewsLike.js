import { toast } from "react-toastify";
import http from "../../interceptor";
import { getProfile } from "../GetData/profile";

const handleNewsLikeClick = async (urlParam, setLikes, changeLikeColor, setChangeLikeColor) => {
    // try {
    //   const result = await http.post(
    //     "/News/NewsLike/" + Param.id
    //   );
    //   setLikes(result);
    //   console.log(result);
    //   setChangeLikeColor(!changeLikeColor);
    // } catch (error) {
    //   console.error(error);
    // }
    // setLikes(result);
  const user = await getProfile();
  if (user == false) {
    showLoginModal.click();
  } else {
      try {
        const result = await http.post(
          "/News/NewsLike/" + urlParam.id
        );
        setLikes(result);
        console.log(result);
        setChangeLikeColor(!changeLikeColor);
      } catch (error) {
        console.error(error);
      }
      setLikes(result);
      // return true;
    }
  
};

export default handleNewsLikeClick;