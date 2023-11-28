import http from "../../interceptor";
// import { Toast } from "react-toastify";

const upload = (formFile, onUploadProgress) => {
    let formData = new FormData();
  
    formData.append("formFile", formFile);
  
    return http.post("/SharePanel/AddProfileImage", formData);
};
  
const getFiles = () => {
    return http.get("/SharePanel/GetProfileInfo");
};

const AddMultipleImage  = {
    upload,
    getFiles,
};
export default AddMultipleImage;