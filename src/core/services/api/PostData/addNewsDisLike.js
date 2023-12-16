import http from "../../interceptor";
import { toast } from "react-toastify";
import { getProfile } from "../GetData/profile";
import GetNewsDetails from "../GetData/getNewsData/getNewsDetailsById";

const handleNewsDisLike = async (id, changeDisLikeColor, setChangeDisLikeColor, setData) => {
  const user = await getProfile();
  if (user == false) {
    showLoginModal.click();
  } else {
      try {
        const result = await http.post("/News/NewsDissLike/"+id);
        if (result.success == true) {
          toast.success(result.message)
          setChangeDisLikeColor(!changeDisLikeColor);
          GetNewsDetails(id, setData)
        } else if (result.success == false) {
          toast.error(result.message)
        }
      } catch (error) {
        console.error(error);
      }
    }
};

export default handleNewsDisLike;