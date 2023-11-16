import React, { Fragment, useState, useEffect, useCallback } from "react";
import getProfileInfo from "../../core/services/api/GetData/getProfileInfo";
import TitleSection from "../../components/UserPanel/TitleSection";
import EditProfileImage from "../../components/UserPanel/EditProfile/EditProfileImage";
import EditProfileInfo from "../../components/UserPanel/EditProfile/EditProfileInfo";
import onSubmit from "../../core/services/api/PostData/EditProfile";

const EditProfile = () => {
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
      <TitleSection title={"حساب کاربری"} />   
      <EditProfileImage/>
      <div className="mt-8">
        <EditProfileInfo
          email = {userInfo.email}
          phoneNumber = {userInfo.phoneNumber}
          lastName = {userInfo.lName}
          firstName = {userInfo.fName}
          idCode = {userInfo.nationalCode}
          birthDate = {userInfo.birthDay}                
        />
        <input
          type="submit"
          value="ثبت اطلاعات"
          className="primary-btn block mx-auto mt-12 w-2/5 md:1/6 lg:w-3/12 p-4 mb-8 lg:mb-0 rounded-lg text-[#fff] cursor-pointer"
          onClick={onSubmit}
        />
      </div>
    </Fragment>
  );
};

export default EditProfile;