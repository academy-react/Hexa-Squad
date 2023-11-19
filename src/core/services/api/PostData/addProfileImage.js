import { useCallback } from "react";
import http from "../../interceptor";
import onFormData from "../FormData";

const onSubmit = async (userImage, setUserInfo) => {
    const obj = {
        formFile: userImage
    }
    const data = onFormData(obj)

    try{
        const result = await http.post("/SharePanel/AddProfileImage", data)
        // setUserInfo(result)
        console.log("result2 is:", result)
        

    } catch (error) {
        console.log('error is:', error)
    }
}

export default onSubmit;