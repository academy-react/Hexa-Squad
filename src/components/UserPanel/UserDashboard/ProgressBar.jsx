import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import http from "../../../core/services/interceptor/index";
import getProfileInfo from "../../../core/services/api/GetData/getProfileInfo";
const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);
  const [userInfo, setUserInfo] = useState();
  // const percentage = 50;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await http.get("/SharePanel/GetProfileInfo");
        setPercentage(response.profileCompletionPercentage);
      } catch (error) {
        console.error("Error fetching user information: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <div className="bg-blue-400 h-20 text-red-600">{`${progress}%`}</div>
      <div
        style={{
          width: `${progress}%`,
        }}
      ></div> */}

      <div style={{ width: "150px" }} className=" mt-8 ml-4">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textSize: "14px",
            pathColor: `rgba(94, 3, 252, ${percentage / 100})`,
            textColor: "#4229C5",
            trailColor: "#d6d6d6",
          })}
        />
      </div>

    </div>
  );
};

export default ProgressBar;
