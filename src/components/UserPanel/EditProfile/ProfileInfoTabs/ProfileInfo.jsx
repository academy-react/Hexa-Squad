import React, { Fragment, useState, useEffect, useCallback } from "react";
import getProfileInfo from "../../../../core/services/api/GetData/getProfileInfo";
import TitleSection from "../../../../components/UserPanel/TitleSection";
import EditProfileImage from "../../../../components/UserPanel/EditProfile/EditProfileImage";
import EditProfileInfo from "../../../../components/UserPanel/EditProfile/EditProfileInfo";
import onSubmit from "../../../../core/services/api/PostData/addProfileImage";
import handleEditProfileInfo from "../../../../core/services/api/PutData/handleEditProfileInfo";

const ProfileInfo = () => {
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
      <EditProfileImage
        disable = {true}
      />
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
        <input
          type="submit"
          value="ثبت اطلاعات"
          className="primary-btn block mx-auto mt-12 w-2/5 md:1/6 lg:w-3/12 p-4 mb-8 lg:mb-0 rounded-lg text-[#fff] cursor-pointer"
          onClick={handleEditProfileInfo}
        />
      </div>
    </Fragment>
  );
};

export default ProfileInfo;