import React, { Fragment, useState } from "react";
import onSubmit from "../../../../core/services/api/PostData/addProfileImage";

import pic from '../../../../assets/image/user-circle-icon.png';
import { CheckboxInput } from "../../../common";
import EditProfileImageModal from "./EditProfileImageModal";

const EditProfileImage = () => {
  const [userImage, setUserImage] = useState();

  // const handleImage = (e) => {
  //   setUserImage(e.target.files[0])
  //   console.log(e.target.files[0])
  // };

  return (
    <Fragment>
        <div className="flex items-center justify-center w-40 h-40 mx-auto mt-6">
            {/* <label htmlFor="input-file" className="relative rounded-full w-full h-full shadow-shadow-Course-image-box cursor-pointer ">
                <img src={userImage ? URL.createObjectURL(userImage) : pic} alt="image"  className="w-full object-cover h-full rounded-full" />

                <input id="input-file" type='file' onChange={handleImage}  className="hidden" disabled={disable} />
            </label> */}
          <img src={userImage ? URL.createObjectURL(userImage) : pic} alt="image"  className="w-full object-cover h-full rounded-full" />

        </div>


        {/* <div className="flex flex-row">
          <input
            type="submit"
            value="حذف عکس"
            className="primary-btn block mx-auto mt-12 w-2/5 md:1/6 lg:w-3/12 p-4 mb-8 lg:mb-0 rounded-lg text-[#fff] cursor-pointer"
          />
          <input
            type="submit"
            value="ثبت عکس"
            className="primary-btn block mx-auto mt-12 w-2/5 md:1/6 lg:w-3/12 p-4 mb-8 lg:mb-0 rounded-lg text-[#fff] cursor-pointer"
            onClick={()=>{onSubmit(userImage)}}
          />
          <CheckboxInput name={"showEditImageModal"} />
          <EditProfileImageModal/>
          <input
            type="submit"
            value="ویرایش تصویر"
            className="primary-btn block mx-auto mt-12 w-2/5 md:1/6 lg:w-3/12 p-4 mb-8 lg:mb-0 rounded-lg text-[#fff] cursor-pointer"
            onClick={() => showEditImageModal.click()}
          />
        </div> */}
          <CheckboxInput name={"showEditImageModal"} />
          <EditProfileImageModal/>
          <span 
            className="flex gap-x-3 mt-8 text-slate-600/90 dark:text-semiWhite2 justify-center cursor-pointer"
            dir="ltr"
            onClick={() => showEditImageModal.click()} 
          >
            ویرایش عکس
            <i class="bi bi-pencil-square"></i>
          </span>          
        
        {/* <span className="text-[#3F3F47aa] dark:text-semiWhite2 flex justify-center mt-2">ویرایش تصویر</span> */}

    </Fragment>
  );
};

export default EditProfileImage;
