import http from "../../../interceptor";

const GetNewsDetails = async (id, setData, setComment) => {
    try {
      const result = await http.get("/News/" + id);
      setData(result.detailsNewsDto);
      setComment(result.commentDtos);
    } catch (error) {
      console.log(error);
    }
  }
export default GetNewsDetails;