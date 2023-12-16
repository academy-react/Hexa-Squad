import http from "../../interceptor";
import { toast } from "react-toastify";
import { getProfile } from "../GetData/profile";
import GetNewsDetails from "../GetData/getNewsData/getNewsDetailsById";

const handleNewsLikeClick = async (id, currentUserIsLike, changeLikeColor, setChangeLikeColor, setData) => {
  const user = await getProfile();
  if (user == false) {
    showLoginModal.click();
  } else  {        
      try {
        const result = await http.post("/News/NewsLike/" + id);
        toast.success("مقاله مورد نظر لایک شد")
        setChangeLikeColor(!changeLikeColor);    
        GetNewsDetails(id, setData)
      } catch (error) {
        console.error(error);
      }
    } 
};
export default handleNewsLikeClick;