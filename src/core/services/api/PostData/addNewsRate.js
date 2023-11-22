import http from "../../interceptor";
import { getProfile } from "../GetData/profile";

const handleNewsRate = async (data, newRating, RateNumber, setNewsRate, setStars, stars) => {
  const user = await getProfile();
  if (user == false) {
    showLoginModal.click();
  } else {
    // let newRating
    // setStars(newRating);
    try {
      const result = await http.post(
        `/News/NewsRate?NewsId=${data.id}&RateNumber=${stars}`
      );
      setNewsRate(result);
      console.log(result);
      // console.log("newsID = ",data.id)
    } catch (error) {
      console.error(error);
    }
  }
}

export default handleNewsRate;