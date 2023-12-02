import React, { Fragment, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import http from "../../../../core/services/interceptor";
import onFormData from "../../../../core/services/api/FormData";
import { CheckboxInput } from "../../../common";
import AddImageModal from "./AddImageModal";
// import AddImageDropzoneModal from "./AddImageDropzoneModal";
// import UploadMultipleImage from "./UploadMultipleImage";

import pic from '../../../../assets/image/user-circle-icon.png';
import darkPic from "../../../../assets/image/user-circle-icon-white.png";

const EditImageModal = ({userInfo}) => {

    const navigate = useNavigate();
    // Select Profile Image API
    const handleSelectImage = useCallback(async (value) => {
        const obj = {
            ImageId: value
        }
        const data = onFormData(obj)
        
        try {
           const result =  await http.post("/SharePanel/SelectProfileImage",data)
           if (result.success) {
            toast.success(result.message);
            // setTimeout(() => {
            //     navigate("/userPanel");
            //   }, 2000);

           } else if (!result.success) {
            toast.error(result.message)
           }
        } catch (error){
            console.log(error);
        }
    }) 

    // Delete Profile Image API
    const handleDeleteImage = useCallback(async (value) => {
        const obj = {
            DeleteEntityId: value
        }
        const data = onFormData(obj)
        
        try {
           const result =  await http.delete("/SharePanel/DeleteProfileImage", {data: data})
           if (result.success) {
            toast.success(result.message);
            // setTimeout(() => {
            //     navigate("/userPanel");
            //   }, 2000);

           } else if (!result.success) {
            toast.error(result.message)
           }
        } catch (error){
            console.log(error);
        }
    }) 

    return(
        <Fragment>
            <div className="EditImageModal dark:bg-indigo-800 " dir="ltr">

                <label htmlFor="showEditImageModal" className="cursor-pointer">
                    <i className="bi bi-x absolute top-2 z-50 right-5 text-slate-600 dark:text-semiWhite2 text-4xl"></i>
                </label>
                
                <div className="card p-4 rounded-md overflow-hidden text-black">
                    <div className="text-center">
                        <p className=" text-violet-800 dark:text-white text-2xl">ویرایش عکس</p>
                    </div>

                    <div className="flex items-center justify-center w-40 h-40 mx-auto my-4">
                        <img 
                            src={userInfo.currentPictureAddress ? userInfo.currentPictureAddress : pic} 
                            alt="image"  
                            className="dark:hidden w-full h-full rounded-full"
                        />
                        <img 
                            src={userInfo.currentPictureAddress ? userInfo.currentPictureAddress : darkPic} 
                            alt="image"  
                            className="hidden dark:block w-full object-cover h-full rounded-full" 
                        />
                    </div>

                    <div className="container w-full  flex justify-start items-start flex-wrap h-40 overflow-y-auto mt-8">
                        {userInfo.userImage === undefined ? " " : userInfo.userImage.map((item, index) => (
                            <div 
                                key={index}
                                className="image w-28 mr-1 h-28 relative m-4 border-2 border-violet-600 rounded-md"
                            >   
                                <span 
                                    className="delete absolute -top-1 right-2 text-2xl cursor-pointer z-50 text-red-700"
                                    onClick={() => handleDeleteImage(item.id)}
                                >
                                    &times;
                                </span>
                                <i 
                                    className="bi bi-plus-square delete absolute  left-2 cursor-pointer z-50 text-blue-700"
                                    onClick={() => handleSelectImage(item.id)}
                                >
                                </i>
                                <img 
                                    src={item.puctureAddress} 
                                    alt={`${item.pictureName}`} 
                                    className="w-full h-full rounded-md" 
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex flew-row justify-between mt-4 text-slate-700 dark:text-slate-300 border-t-2 border-t-slate-400/50 dark:border-t-slate-400">
                        <span 
                            className="flex gap-x-3 mt-2 ml-4 text-red-800 cursor-pointer"
                        >
                            حذف عکس
                            <i class="bi bi-trash"></i>
                        </span>
                        <CheckboxInput name={"showSelectImageModal"} />
                        <AddImageModal userInfo={userInfo} />
                        <span 
                            onClick={() => showSelectImageModal.click()} 
                            className="flex gap-x-3 mt-2 mr-4 cursor-pointer"
                        >
                            انتخاب عکس
                            <i class="bi bi-plus-square"></i>
                        </span>

                    </div>
                </div>

            </div>
        </Fragment>
    )
}
export default EditImageModal;