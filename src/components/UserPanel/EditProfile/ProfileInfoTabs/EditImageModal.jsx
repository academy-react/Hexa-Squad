import React, { Fragment, useState, useRef } from "react";
import { CheckboxInput } from "../../../common";
import AddImageModal from "./AddImageModal";
// import AddImageDropzoneModal from "./AddImageDropzoneModal";

import { cameraSvg } from "../../../../assets/icons/svgIcons";
import pic from '../../../../assets/image/user-circle-icon.png';

const EditImageModal = () => {
    const [images, setImages] = useState();
    // const handleImage = (e) => {
    //     setImages(e.target.files[0])
    //     console.log(e.target.files[0])
    // };

    return(
        <Fragment>
            <div className="EditImageModal" dir="ltr">

                <label htmlFor="showEditImageModal" className="cursor-pointer">
                    <i className="bi bi-x absolute top-2 z-50 right-5 text-slate-600 dark:text-semiWhite2 text-4xl"></i>
                </label>
                
                <div className=" p-4 rounded-md overflow-hidden text-black">
                    <div className="text-center">
                        <p className="mt-4 text-violet-800 text-3xl">ویرایش عکس</p>
                    </div>

                    <div className="flex items-center justify-center w-56 h-56 mx-auto mt-6">
                        {/* <label htmlFor="input-file" className="relative rounded-full w-full h-full shadow-shadow-Course-image-box">
                            <img src={images ? URL.createObjectURL(images) : pic} alt="image"  className="w-full h-full rounded-full" />

                            <input id="input-file" type='file' onChange={handleImage}  className="hidden" />
                        </label> */}
                        <img src={images ? URL.createObjectURL(images) : pic} alt="image"  className="w-full h-full rounded-full" />

                    </div>

                    <div className="flex flew-row justify-between mt-20 text-slate-700 border-t-2 border-t-slate-400/50">
                        {/* <input
                            type="submit"
                            value="حذف عکس"
                            className="primary-btn block mx-auto mt-12 w-2/5 md:1/6 lg:w-3/12 p-4 mb-8 lg:mb-0 rounded-lg text-[#fff] cursor-pointer"
                        /> */}
                        <span 
                            className="flex gap-x-3 mt-2 ml-4 cursor-pointer"
                        >
                            حذف عکس
                            <i class="bi bi-trash"></i>
                        </span>
                        <CheckboxInput name={"showSelectImageModal"} />
                        <AddImageModal/>
                        {/* <input
                            type="submit"
                            value="انتخاب عکس"
                            className="primary-btn block mx-auto mt-12 w-2/5 md:1/6 lg:w-3/12 p-4 mb-8 lg:mb-0 rounded-lg text-[#fff] cursor-pointer"
                            onClick={() => showSelectImageModal.click()}
                        /> */}
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