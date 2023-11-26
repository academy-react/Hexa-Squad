import http from "../../../interceptor";

const getNewsFavorite = async (setData, setAllData) => {
  try {
    const result = await http.get("/SharePanel/GetMyFavoriteNews");
    try {
      setData(result.myFavoriteNews);
      setAllData(result.myFavoriteNews);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
export default getNewsFavorite;
