import React from "react";

const CourseBody = ({ title, professorName, price }) => {
  return (
    <div className="course-body mt-6">
      <h2 className="course-name text-darkblue2 dark:text-[#6974FF] opacity-90 text-2xl pb-3">
        {title}
      </h2>
      <h3 className="prof-name text-lightblue4 text-xl pb-3">
        مدرس: <span> {professorName}</span>{" "}
      </h3>
      <h4 className="text-darkblue2 text-base pb-3 dark:text-[#7B5EEA]"> {price} </h4>
    </div>
  );
};

export default CourseBody;
