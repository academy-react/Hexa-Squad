import http from "../../interceptor";

const getProfileInfo = async (setUserInfo) => {
    try {
      const result = await http.get("/SharePanel/GetProfileInfo")
        // result !=undefined ? setUserInfo(result) :"";
        setUserInfo(result);

    } catch (error) {
      console.log(error);
    }
};
export default getProfileInfo;