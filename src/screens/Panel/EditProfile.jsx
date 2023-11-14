import React, { Fragment, useState, useEffect, useCallback } from "react";
// import getProfileInfo from "../../core/services/api/GetData/getProfileInfo";
import TitleSection from "../../components/UserPanel/TitleSection";
import EditProfileImage from "../../components/UserPanel/EditProfile/EditProfileImage";
import EditProfileInfo from "../../components/UserPanel/EditProfile/EditProfileInfo";
import http from "../../core/services/interceptor";

const EditProfile = () => {
    const [userInfo, setUserInfo] = useState({
        // email : "",
        // "phoneNumber" : "",
        // "lName" : "",
        // "fName" : "",
        // "nationalCode" : "",
        // "birthDay" : ""
    });
    const getProfileInfo = useCallback (async () => {
        try {
          const result = await http.get('/SharePanel/GetProfileInfo')
            setUserInfo(result);
            console.log("result is", result)
    
        } catch (error) {
          console.log("error is",error);
        }
    });
    useEffect(() => {
        getProfileInfo()
    }, [getProfileInfo]);

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
            />
        </div>
    </Fragment>
  );
};

export default EditProfile;