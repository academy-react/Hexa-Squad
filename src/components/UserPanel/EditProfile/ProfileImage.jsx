import React, { Fragment, useState, useEffect } from "react";
import { CheckboxInput } from "../../common";
import EditImageModal from "./EditImageModal";
import getProfileInfo from "../../../core/services/api/GetData/getProfileInfo";

import pic from "../../../assets/image/user-circle-icon.png";
import darkPic from "../../../assets/image/user-circle-icon-white.png";


const ProfileImage = () => {
  // const [userImage, setUserImage] = useState([]);

  // const handleImage = (e) => {
  //   setUserImage(e.target.files[0])
  //   console.log(e.target.files[0])
  // };

  // get User Image from Profile information
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    getProfileInfo(setUserInfo);
  }, [getProfileInfo]);

  const onSubmit = () => {
    getProfileInfo(setUserInfo)
    showEditImageModal.click()
  }

  return (
    <Fragment>
        <div className="flex items-center justify-center w-40 h-40 mx-auto mt-6">
            {/* <label htmlFor="input-file" className="relative rounded-full w-full h-full shadow-shadow-Course-image-box cursor-pointer ">
                <img src={userImage ? URL.createObjectURL(userImage) : pic} alt="image"  className="w-full object-cover h-full rounded-full" />

                <input id="input-file" type='file' onChange={handleImage}  className="hidden" disabled={disable} />
            </label> */}
          <img src={userInfo.currentPictureAddress === "Not-set" ? pic : userInfo.currentPictureAddress} alt="image"  className="dark:hidden w-full object-cover h-full rounded-full" />
          <img src={userInfo.currentPictureAddress === "Not-set" ? darkPic : userInfo.currentPictureAddress} alt="image"  className="hidden dark:block w-full object-cover h-full rounded-full" />

        </div>

        <CheckboxInput name={"showEditImageModal"} />
        <EditImageModal userInfo={userInfo} setUserInfo={setUserInfo} />
        <span 
          className="flex gap-x-3 mt-8 text-slate-600/90 dark:text-semiWhite2 justify-center cursor-pointer"
          dir="ltr"
          onClick={onSubmit} 
        >
          ویرایش عکس
          <i class="bi bi-pencil-square"></i>
        </span>          
        
    </Fragment>
  );
};

export default ProfileImage;
