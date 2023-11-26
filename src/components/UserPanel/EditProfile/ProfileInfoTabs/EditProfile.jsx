import React, { Fragment, useState, useEffect, useCallback } from "react";
import getProfileInfo from "../../../../core/services/api/GetData/getProfileInfo";
import EditProfileInfo from "./EditProfileInfo";
import onSubmit from "../../../../core/services/api/PostData/addProfileImage";
// import handleEditProfileInfo from "../../../../core/services/api/PutData/handleEditProfileInfo";
import http from "../../../../core/services/interceptor";
import onFormData from "../../../../core/services/api/FormData";
import { toast } from "react-toastify";

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

  // Update Profile Info
  const handleEditProfileInfo = async (value) => {
    const obj = {
        LName: value.lName,
        fName : value.fName,
        userAbout : value.userAbout,
        linkdinProfile : value.linkdinProfile,
        telegramLink : value.telegramLink,
        homeAdderess : value.homeAdderess,
        nationalCode : value.nationalCode,
        gender : value.gender,
        birthDay : value.birthDay
    }
    const data = onFormData(obj)
    try{
        const result = await http.put("/SharePanel/UpdateProfileInfo", data)
        // setUserInfo(result)
        console.log("result is:", result)
        if (result.success) {
            toast.success(result.message)
        } else if (!result.success) {
            toast.error(result.errors)
        }
    } catch (error) {
        console.log('error is:', error)
    }
  }

  return (
    <Fragment>
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
          disable = {false}
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

export default EditProfile;