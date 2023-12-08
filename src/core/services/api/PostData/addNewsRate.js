import http from "../../interceptor";
import { toast } from "react-toastify";
import { getProfile } from "../GetData/profile";

const handleNewsRate = async (data, stars) => {
    const user = await getProfile();
    if (user == false) {
      showLoginModal.click();
    } else {
      try {
        const result = await http.post(
          `/News/NewsRate?NewsId=${data.id}&RateNumber=${stars}`
        );
        if (result.success === true) {
          if(result.message === "هشدار ایجاد هرزنامه در دیتابیش"){
            toast.error(result.message)
          } else {
            toast.success(result.message)
          }
          // setNewsRate(stars);
        } else {
          toast.error(result.message)
        }
      } catch (error) {
        console.error(error);
      }
    }
};
export default handleNewsRate;