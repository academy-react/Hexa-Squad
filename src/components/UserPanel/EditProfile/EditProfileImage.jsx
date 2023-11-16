import React, { Fragment, useState, useEffect } from "react";
// import http from "../../core/services/interceptor";

import { cameraSvg } from "../../../assets/icons/svgIcons";
import pic from "../../../assets/image/drBahr.jpg";
import http from "../../../core/services/interceptor";
import axios from "axios";

const EditProfileImage = ({ imageProfile, setImageProfile }) => {
  const [image, setImage] = useState();
  const uploadImg = async (value) => {
    const data = new FormData();
    data.append("image", image);
    console.log(data)
    try {
      const result = await http.post(
        "/upload/image",
        data
      );
      console.log(result);
      setImageProfile(result.data.result);
      try {
        const addProfileImage = await http.post(
          "/SharePanel/AddProfileImage",
          result.data.result
        );
        console.log(addProfileImage);
      } catch (error) {
        return false;
      }
    } catch (error) {
      return false;
    }
  };

  return (
    <Fragment>
      <div className="flex items-center justify-center w-40 h-40 mx-auto mt-6">
        <label
          htmlFor="input-file"
          className="relative rounded-full w-full h-full shadow-shadow-Course-image-box cursor-pointer "
        >
          <div className="absolute bottom-0 w-full h-1/2 flex justify-center pt-6 bg-darkblue bg-opacity-40 rounded-b-full">
            {cameraSvg}
          </div>
          <img
            src={image ? URL.createObjectURL(image) : imageProfile}
            alt="image"
            className="w-full object-cover h-full rounded-full"
          />

          <input
            id="input-file"
            type="file"
            onChange={(e) => {
              uploadImg(e.target.files[0]);
              setImage(e.target.files[0]);
            }}
            className="hidden"
          />
        </label>
      </div>
      <span className="text-[#3F3F47aa] dark:text-semiWhite2 flex justify-center mt-2">
        ویرایش تصویر
      </span>
    </Fragment>
  );
};

export default EditProfileImage;
