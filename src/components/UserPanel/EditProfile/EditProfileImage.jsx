import React, { Fragment, useState } from "react";
import onSubmit from "../../../core/services/api/PostData/addProfileImage";

import { cameraSvg } from "../../../assets/icons/svgIcons";
import pic from '../../../assets/image/drBahr.jpg';
import { CheckboxInput } from "../../common";
import EditProfileImageModal from "./EditProfileImageModal";

const EditProfileImage = () => {
  const [userImage, setUserImage] = useState();
  // const [pathUrl, setPathUrl] = useState();

  const handleImage = (e) => {
    setUserImage(e.target.files[0])
    console.log(e.target.files[0])
  };

  return (
    
    <Fragment>
        <div className="flex items-center justify-center w-40 h-40 mx-auto mt-6">
            <label htmlFor="input-file" className="relative rounded-full w-full h-full shadow-shadow-Course-image-box cursor-pointer ">
                {/* <div className="absolute bottom-0 w-full h-1/2 flex justify-center pt-6 bg-darkblue bg-opacity-40 rounded-b-full">
                    {cameraSvg}
                </div> */}
                <img src={userImage ? URL.createObjectURL(userImage) : pic} alt="image"  className="w-full object-cover h-full rounded-full" />

                <input id="input-file" type='file' onChange={handleImage}  className="hidden" />
            </label>
        </div>
        <div className="flex flex-row">
          <input
            type="submit"
            value="حذف عکس"
            className="primary-btn block mx-auto mt-12 w-2/5 md:1/6 lg:w-3/12 p-4 mb-8 lg:mb-0 rounded-lg text-[#fff] cursor-pointer"
          />
          <input
            type="submit"
            value="ثبت عکس"
            className="primary-btn block mx-auto mt-12 w-2/5 md:1/6 lg:w-3/12 p-4 mb-8 lg:mb-0 rounded-lg text-[#fff] cursor-pointer"
            onClick={onSubmit}
          />
          <CheckboxInput name={"showEditImageModal"} />
          <EditProfileImageModal/>
          <input
            type="submit"
            value="ویرایش تصویر"
            className="primary-btn block mx-auto mt-12 w-2/5 md:1/6 lg:w-3/12 p-4 mb-8 lg:mb-0 rounded-lg text-[#fff] cursor-pointer"
            onClick={() => showEditImageModal.click()}
          />
        </div>
        {/* <span className="text-[#3F3F47aa] dark:text-semiWhite2 flex justify-center mt-2">ویرایش تصویر</span> */}

    </Fragment>
  );
};

export default EditProfileImage;