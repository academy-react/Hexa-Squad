import React, { Fragment, useState, useEffect , useRef } from "react";
import { CheckboxInput } from "../../../common";
import AddImageModal from "./AddImageModal";
// import AddImageDropzoneModal from "./AddImageDropzoneModal";
// import UploadMultipleImage from "./UploadMultipleImage";

import { cameraSvg } from "../../../../assets/icons/svgIcons";
import pic from '../../../../assets/image/user-circle-icon.png';
import darkPic from "../../../../assets/image/user-circle-icon-white.png";

const EditImageModal = ({userInfo}) => {
    // const [images, setImages] = useState();
    // const handleImage = (e) => {
    //     setImages(e.target.files[0])
    //     console.log(e.target.files[0])
    // };

    return(
        <Fragment>
            <div className="EditImageModal dark:bg-indigo-800 " dir="ltr">

                <label htmlFor="showEditImageModal" className="cursor-pointer">
                    <i className="bi bi-x absolute top-2 z-50 right-5 text-slate-600 dark:text-semiWhite2 text-4xl"></i>
                </label>
                
                <div className=" p-4 rounded-md overflow-hidden text-black">
                    <div className="text-center">
                        <p className="mt-4 text-violet-800 dark:text-white text-3xl">ویرایش عکس</p>
                    </div>

                    <div className="flex items-center justify-center w-56 h-56 mx-auto mt-6">
                        {/* <label htmlFor="input-file" className="relative rounded-full w-full h-full shadow-shadow-Course-image-box">
                            <img src={images ? URL.createObjectURL(images) : pic} alt="image"  className="w-full h-full rounded-full" />

                            <input id="input-file" type='file' onChange={handleImage}  className="hidden" />
                        </label> */}
                        <img src={userInfo.currentPictureAddress ? userInfo.currentPictureAddress : pic} alt="image"  className="dark:hidden w-full h-full rounded-full" />
                        <img src={userInfo.currentPictureAddress ? userInfo.currentPictureAddress : darkPic} alt="image"  className="hidden dark:block w-full object-cover h-full rounded-full" />

                    </div>

                    <div className="flex flew-row justify-between mt-20 text-slate-700 dark:text-slate-300 border-t-2 border-t-slate-400/50 dark:border-t-slate-400">
                        <span 
                            className="flex gap-x-3 mt-2 ml-4 cursor-pointer"
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