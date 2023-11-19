import http from "../../interceptor";
import onFormData from "../FormData";

const handleEditProfileInfo = async (userInfo, setUserInfo) => {
    const obj = {
        LName: userInfo.lName,
        fName : userInfo.fName,
        userAbout : userInfo.userAbout,
        linkdinProfile : userInfo.linkdinProfile,
        telegramLink : userInfo.telegramLink,
        homeAdderess : userInfo.homeAdderess,
        nationalCode : userInfo.nationalCode,
        gender : userInfo.gender,
        birthDay : userInfo.birthDay
    }
    const data = onFormData(obj)

    try{
        const result = await http.put("/SharePanel/UpdateProfileInfo", data)
        setUserInfo(result)
        console.log("result2 is:", result)
        

    } catch (error) {
        console.log('error is:', error)
    }
}

export default handleEditProfileInfo;