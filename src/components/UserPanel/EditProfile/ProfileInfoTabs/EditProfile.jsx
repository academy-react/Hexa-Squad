import React, { Fragment, useState, useEffect, useCallback } from "react";
import getProfileInfo from "../../../../core/services/api/GetData/getProfileInfo";
import EditProfileInfo from "./EditProfileInfo";
import http from "../../../../core/services/interceptor";
import onFormData from "../../../../core/services/api/FormData";
import { toast } from "react-toastify";

const EditProfile = () => {
  const [userInfo, setUserInfo] = useState([]);

  // get Profile information
  useEffect(() => {
    getProfileInfo(setUserInfo);
  }, []);

  // Edit User Profile Info
  const handleEditProfileInfo = async (value) => {
    const obj = {
      lName: value.lName,
      fName: value.fName,
      userAbout: value.userAbout,
      linkdinProfile: value.linkdinProfile,
      telegramLink: value.telegramLink,
      homeAdderess: value.homeAdderess,
      nationalCode: value.nationalCode,
      gender: value.gender,
      birthDay: value.birthDay,
      latitude: "0",
      longitude: "1"
    };
    const data = onFormData(obj);
    console.log("formData=", data)

    try {
      const result = await http.put("/SharePanel/UpdateProfileInfo", data);
      setUserInfo(result);
      console.log("result is:", result);
      if (result.success) {
        toast.success(result.message);
      } else if (!result.success) {
        toast.error(result.errors);
      }
    } catch (error) {
      console.log("error is:", error);
    }
  };

  return (
    <Fragment>
      <div className="mt-8">
        <EditProfileInfo
          email={userInfo.email}
          phoneNumber={userInfo.phoneNumber}
          lName={userInfo.lName}
          fName={userInfo.fName}
          nationalCode={userInfo.nationalCode}
          birthDay={userInfo.birthDay}
          userAbout={userInfo.userAbout}
          homeAdderess={userInfo.homeAdderess}
          gender={userInfo.gender}
          linkdinProfile={userInfo.linkdinProfile}
          telegramLink={userInfo.telegramLink}
          handleEditProfileInfo={handleEditProfileInfo}
        />
      </div>
    </Fragment>
  );
};

export default EditProfile;
