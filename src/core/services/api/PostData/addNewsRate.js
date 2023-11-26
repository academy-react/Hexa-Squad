import http from "../../interceptor";
import { toast } from "react-toastify";
import { getProfile } from "../GetData/profile";

const handleNewsRate = async (data, stars, setNewsRate) => {
    const user = await getProfile();
    if (user == false) {
      showLoginModal.click();
    } else {
      console.log()
      try {
        const result = await http.post(
          `/News/NewsRate?NewsId=${data.id}&RateNumber=5`
        );
        if (result.success === true) {
          toast.success(result.message)
          setNewsRate(stars);
        } else {
          toast.error(result.message)
        }
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
};
export default handleNewsRate;