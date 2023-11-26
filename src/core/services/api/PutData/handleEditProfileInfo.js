import http from "../../interceptor";
import onFormData from "../FormData";
import { toast } from "react-toastify";

const handleEditProfileInfo = async (value, setUserInfo) => {
    const obj = {
        LName: value.lName,
        fName : value.fName,
        userAbout : value.userAbout,
        linkdinProfile : value.linkdinProfile,
        telegramLink : value.telegramLink,
        homeAdderess : value.homeAdderess,
        nationalCode : value.nationalCode,
        gender : value.gender,
        birthDay : value.birthDay
    }
    const data = onFormData(obj)

    try{
        const result = await http.put("/SharePanel/UpdateProfileInfo", data)
        // setUserInfo(result)
        console.log("result2 is:", result)
        if (result.success) {
            toast.success(result.message)
        } else {
            toast.error(result.errors)
        }
        

    } catch (error) {
        console.log('error is:', error)
    }
}

export default handleEditProfileInfo;