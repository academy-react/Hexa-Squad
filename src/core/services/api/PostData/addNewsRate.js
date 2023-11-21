import http from "../../interceptor";

const handleNewsRate = async (NewsId, RateNumber, setNewsRate, setStars) => {
    try {
      const result = await http.post(
        `/News/NewsRate?NewsId=${NewsId}&RateNumber=${RateNumber}`
      );
      setNewsRate(result);
      console.log(result);
      setStars(newStar);
    } catch (error) {
      console.error(error);
    }
    // setNewsRate(result);
};

export default handleNewsRate;