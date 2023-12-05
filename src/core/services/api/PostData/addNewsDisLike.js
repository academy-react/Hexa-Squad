import http from "../../interceptor";
import { toast } from "react-toastify";
import { getProfile } from "../GetData/profile";

const handleNewsDisLike = async (urlParam, changeDisLikeColor, setChangeDisLikeColor) => {
  const user = await getProfile();
  if (user == false) {
    showLoginModal.click();
  } else {
      try {
        const result = await http.post("/News/NewsDissLike/"+urlParam.id);
        if (result.success == true) {
          toast.success(result.message)
          setChangeDisLikeColor(!changeDisLikeColor);
        } else if (result.success == false) {
          toast.error(result.message)
        }
      } catch (error) {
        console.error(error);
      }
    }
};

export default handleNewsDisLike;