import http from "../../interceptor";
import { toast } from "react-toastify";
import { getProfile } from "../GetData/profile";

const handleNewsLikeClick = async (urlParam, setLikes, changeLikeColor, setChangeLikeColor) => {
  const user = await getProfile();
  if (user == false) {
    showLoginModal.click();
  } else {
      try {
        const result = await http.post("/News/NewsLike/" + urlParam.id);
        if (result.message == null) {
          toast.error("این مقاله را قبلا لایک کرده اید!")
        } else if (result.message !== null) {
          toast.promise("مقاله مورد نظر لایک شد")
          setChangeLikeColor(!changeLikeColor);
        }
        setLikes(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
  
};

export default handleNewsLikeClick;