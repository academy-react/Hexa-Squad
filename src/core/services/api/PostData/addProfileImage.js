import http from "../../interceptor";
import onFormData from "../FormData";


const onSubmit = async (userImage, setUserInfo) => {
    console.log("image", userImage)
    const obj = {
        formFile: userImage
    }
    const data = onFormData(obj)

    try{
        const response = await http.post("/SharePanel/AddProfileImage", data)
        setUserInfo([data])
        console.log("result2 is:", response)
        

    } catch (error) {
        console.log('error is:', error)
    }
}

export default onSubmit;