import http from "../../interceptor";
import { toast } from "react-toastify";
import { getProfile } from "../GetData/profile";

const handleNewsLikeClick = async (urlParam, currentUserIsLike, changeLikeColor, setChangeLikeColor) => {
  const user = await getProfile();
  if (user == false) {
    showLoginModal.click();
  } else {        
    if(currentUserIsLike === false) {
      try {
        const result = await http.post("/News/NewsLike/" + urlParam.id);
        toast.success("مقاله مورد نظر لایک شد")
        setChangeLikeColor(!changeLikeColor);  
        console.log(result)        
      } catch (error) {
        console.error(error);
      }
    } else {
      toast.error("این مقاله را قبلا لایک کرده اید!")
    }
      //   const result = await http.post("/News/NewsLike/" + urlParam.id);
      //   if (result.message == null) {
      //     toast.error("این مقاله را قبلا لایک کرده اید!")
      //   } else if (result.message !== null) {
      //     toast.success("مقاله مورد نظر لایک شد")
      //     setChangeLikeColor(!changeLikeColor);
      //   }
      //   console.log(result);
      // } catch (error) {
      //   console.error(error);
      // }
    }
  
};

export default handleNewsLikeClick;