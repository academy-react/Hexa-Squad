import http from "../../interceptor";

const handleNewsLikeClick = async (Param, setLikes, changeLikeColor, setChangeLikeColor) => {
    try {
      const result = await http.post(
        "/News/NewsLike/" + Param.id
      );
      setLikes(result);
      console.log(result);
      setChangeLikeColor(!changeLikeColor);
    } catch (error) {
      console.error(error);
    }
    setLikes(result);
};

export default handleNewsLikeClick;