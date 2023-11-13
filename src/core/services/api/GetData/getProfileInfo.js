import http from "../../interceptor";

const getProfileInfo = async (setUserInfo)=>{
    try {
      const result = await http.get('/SharePanel/GetProfileInfo')
      setUserInfo(result);

    } catch (error) {
      console.log(error);
      return [];
    }
};
export default getProfileInfo;