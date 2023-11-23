import http from "../../interceptor";
import { getProfile } from "../GetData/profile";

const handleNewsRate = async ( data, setNewsRate, stars) => {

  const user = await getProfile();
  if (user == false) {
    showLoginModal.click();
  } else {
    console.log("mystar=", stars)
    try {
      const result = await http.post(
        `/News/NewsRate?NewsId=${data.id}&RateNumber=${3}`
      );
      setNewsRate(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}

export default handleNewsRate;