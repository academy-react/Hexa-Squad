import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Http from "../../core/services/interceptor";
import TeacherInfo from "./TeacherProfile/TeacherInfo";
const TeacherProfile = () => {
  const [urlParam, setUrlParam] = useState(useParams());
  const [teacherInfo, setTeacherInfo] = useState({
    skills: [""],
    histories: [""],
    teacherId: null,
    fullName: "",
    linkdinProfileLink: "",
    pictureAddress: null,
    courseCounts: null,
    newsCount: null,
  });
  const fetchTeacherData = useCallback(async () => {
    try {
      const result = await Http.get(
        "Home/GetTeacherDetails?TeacherId=" + urlParam.id
      );
      result != undefined ? setTeacherInfo(result) : "";
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchTeacherData();
  }, [fetchTeacherData]);

  return (
    <div className="py-32" data-aos="zoom-out">
      <div className="w-[90%] lg:max-w-[1260px] py-12 md:pr-12 lg:pr-20 mx-auto bg-[#D7D5FF] shadow-shadow-Categories-box rounded-2xl dark:bg-darkblue6">
        <TeacherInfo
          title={teacherInfo.fullName}
          education={teacherInfo.skills && teacherInfo.skills[0]}
          experiences={teacherInfo.skills && teacherInfo.skills[0]}
          number={teacherInfo.number}
          linkdin={teacherInfo.linkdinProfileLink}
          email={teacherInfo.email}
          image={teacherInfo.pictureAddress}
          courseCounts={teacherInfo.courseCounts}
          newsCount={teacherInfo.newsCount}
        />
      </div>
    </div>
  );
};
export default TeacherProfile;
