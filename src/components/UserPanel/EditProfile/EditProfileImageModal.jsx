import React, { Fragment, useState, useRef } from "react";
import { CheckboxInput } from "../../common";
import AddProfileImageModal from "./AddProfileImageModal";

import { cameraSvg } from "../../../assets/icons/svgIcons";
import pic from '../../../assets/image/drBahr.jpg';

const EditProfileImageModal = () => {
    const [images, setImages] = useState();
    const handleImage = (e) => {
        setImages(e.target.files[0])
        console.log(e.target.files[0])
    };

    return(
        <Fragment>
            <div className="EditImageModal">

                <label htmlFor="showEditImageModal" className="cursor-pointer">
                    <i className="bi bi-x absolute top-2 z-50 right-5 text-slate-600 dark:text-semiWhite2 text-4xl"></i>
                </label>
                
                <div className=" p-4 rounded-md overflow-hidden text-black">
                    <div className="text-center">
                        <p className="mt-4 text-violet-800 text-3xl">افزودن عکس</p>
                    </div>
                    <div className="flex items-center justify-center w-56 h-56 mx-auto mt-6">
                        <label htmlFor="input-file" className="relative rounded-full w-full h-full shadow-shadow-Course-image-box cursor-pointer ">
                            {/* <div className="absolute bottom-0 w-full h-1/2 flex justify-center pt-6 bg-darkblue bg-opacity-40 rounded-b-full">
                                {cameraSvg}
                            </div> */}
                            <img src={images ? URL.createObjectURL(images) : pic} alt="image"  className="w-full h-full rounded-full" />

                            <input id="input-file" type='file' onChange={handleImage}  className="hidden" />
                        </label>
                    </div>
                    <div className="flex flew-row pb-8">
                        <input
                            type="submit"
                            value="حذف عکس"
                            className="primary-btn block mx-auto mt-12 w-2/5 md:1/6 lg:w-3/12 p-4 mb-8 lg:mb-0 rounded-lg text-[#fff] cursor-pointer"
                        />
                        <CheckboxInput name={"showSelectImageModal"} />
                        <AddProfileImageModal/>
                        <input
                            type="submit"
                            value="انتخاب عکس"
                            className="primary-btn block mx-auto mt-12 w-2/5 md:1/6 lg:w-3/12 p-4 mb-8 lg:mb-0 rounded-lg text-[#fff] cursor-pointer"
                            onClick={() => showSelectImageModal.click()}
                        />
                    </div>
                </div>


            </div>
        </Fragment>
    )
}
export default EditProfileImageModal;