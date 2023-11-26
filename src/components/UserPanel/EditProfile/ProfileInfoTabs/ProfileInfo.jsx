import React, { Fragment, useState, useEffect, useCallback } from "react";
import getProfileInfo from "../../../../core/services/api/GetData/getProfileInfo";
import EditProfileInfo from "./EditProfileInfo";
import onSubmit from "../../../../core/services/api/PostData/addProfileImage";

import pic from '../../../../assets/image/user-circle-icon.png';

const ProfileInfo = () => {
  const [userImage, setUserImage] = useState();

  const [userInfo, setUserInfo] = useState([{
      // email : "",
      // "phoneNumber" : "",
      // "lName" : "",
      // "fName" : "",
      // "nationalCode" : "",
      // "birthDay" : ""
  }]);

  // get Profile information
  useEffect(() => {
    getProfileInfo(setUserInfo)
  }, []);

  return (
    <Fragment>
        <div className="flex items-center justify-center w-40 h-40 mx-auto mt-6">
          <img src={userImage ? URL.createObjectURL(userImage) : pic} alt="image"  className="w-full object-cover h-full rounded-full" />
        </div>
      <div className="mt-8">
        <EditProfileInfo
          email = {userInfo.email}
          phoneNumber = {userInfo.phoneNumber}
          lastName = {userInfo.lName}
          firstName = {userInfo.fName}
          idCode = {userInfo.nationalCode}
          birthDate = {userInfo.birthDay} 
          userAbout = {userInfo.userAbout}
          homeAdderess = {userInfo.homeAdderess}
          gender = {userInfo.gender}
          linkdinProfile = {userInfo.linkdinProfile}
          telegramLink = {userInfo.telegramLink}
          disable = {true}
        />
      </div>
    </Fragment>
  );
};

export default ProfileInfo;