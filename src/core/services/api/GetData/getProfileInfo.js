import http from "../../interceptor";

const getProfileInfo = async (setUserInfo) => {
    try {
      const result = await http.get('/SharePanel/GetProfileInfo')
        // result !=undefined ? setUserInfo(result) :"";
        setUserInfo(result);
        console.log("result is", result)

    } catch (error) {
      console.log("error is",error);
    }
};
export default getProfileInfo;