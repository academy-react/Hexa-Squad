import http from "../../interceptor";
import { toast } from "react-toastify";
import { getProfile } from "../GetData/profile";

const handleNewsLikeClick = async (urlParam, currentUserIsLike, changeLikeColor, setChangeLikeColor) => {
  const user = await getProfile();
  if (user == false) {
    showLoginModal.click();
  } else if(currentUserIsLike === false) {        
      try {
        const result = await http.post("/News/NewsLike/" + urlParam.id);
        toast.success("مقاله مورد نظر لایک شد")
        setChangeLikeColor(!changeLikeColor);    
      } catch (error) {
        console.error(error);
      }
    } else {
      toast.error("نظر خود را قبلا ثبت کرده اید!")
    }
};
export default handleNewsLikeClick;