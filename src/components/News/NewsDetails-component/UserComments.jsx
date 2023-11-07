import React, { Fragment, useState, useCallback, useEffect } from "react";
import axios from "axios";
import { AdminComments } from "../";

import userComment from "../../../assets/image/userComment.svg";

const UserComments = ({ name, date, question, uid }) => {
  const [userInfo, setUserInfo] = useState([]);
  const fetchUserData = useCallback(async () => {
    try {
      // console.log(uid)
      const result = await axios.get(
        "https://api-academy.iran.liara.run/api/User/UserDetails/"+uid 
      );
      setUserInfo(result.data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return (
    <Fragment>
      <div className="userComment">
        <div className="userComment-pic">
          <img src={userComment} alt="picture" className="mx-auto" />
        </div>
        <div>
          <p className="inline text-lg md:text-xl text-darkblue2 dark:text-[#9996F9] pr-4">
            {name}-
          </p>
          <p className="inline text-sm md:text-base text-lightblue4 dark:text-[#9996F9] pr-4">
            ارسال شده در{date.slice(0, 10)}{" "}
          </p>
          <p className="text-sm md:text-base text-justify text-darkblue4 dark:text-[#7e7cb1] px-4 pt-2">
            {question}
          </p>
        </div>
      </div>
      {/* {adminComments} */}
    </Fragment>
  );
};

export default UserComments;
