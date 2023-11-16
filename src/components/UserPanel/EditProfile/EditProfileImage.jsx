import React, { Fragment, useState } from "react";

import { cameraSvg } from "../../../assets/icons/svgIcons";
import pic from '../../../assets/image/drBahr.jpg';

const EditProfileImage = () => {
  const [userImage, setUserImage] = useState();
  const handleImage = (e) => {
    setUserImage(e.target.files[0])
    console.log(e.target.files[0])
  };

  return (
    <Fragment>
        <div className="flex items-center justify-center w-40 h-40 mx-auto mt-6">
            <label htmlFor="input-file" className="relative rounded-full w-full h-full shadow-shadow-Course-image-box cursor-pointer ">
                <div className="absolute bottom-0 w-full h-1/2 flex justify-center pt-6 bg-darkblue bg-opacity-40 rounded-b-full">
                    {cameraSvg}
                </div>
                <img src={userImage ? URL.createObjectURL(userImage) : pic} alt="image"  className="w-full object-cover h-full rounded-full" />

                <input id="input-file" type='file' onChange={handleImage}  className="hidden" />
            </label>
        </div>
        <span className="text-[#3F3F47aa] dark:text-semiWhite2 flex justify-center mt-2">ویرایش تصویر</span>

    </Fragment>
  );
};

export default EditProfileImage;
