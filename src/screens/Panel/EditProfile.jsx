import React, { Fragment, useState, useEffect } from "react";
import getProfileInfo from "../../core/services/api/GetData/getProfileInfo";
import TitleSection from "../../components/UserPanel/TitleSection";
import EditProfileImage from "../../components/UserPanel/EditProfile/EditProfileImage";
import EditProfileInfo from "../../components/UserPanel/EditProfile/EditProfileInfo";

const EditProfile = () => {
    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {
        getProfileInfo(setUserInfo)
    }, []);
    
    const EditProfileInfoMapper = userInfo.map((item, index) => {
        return (
          <EditProfileInfo
            key={index}
            email={item.email}
            phoneNumber={item.phoneNumber}
            lastName={item.lName}
            firstName={item.fName}
            idCode={item.nationalCode}
            birthDate={item.birthDay}
          />
        );
      });

  return (
    <Fragment>
        <TitleSection title={"حساب کاربری"} />   
        <EditProfileImage/>
        <div className="mt-8">
            {EditProfileInfoMapper}
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