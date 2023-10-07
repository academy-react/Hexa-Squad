import React from "react";
import teacher from "../../../assets/image/teacher1.jpg";

const TeacherCard = ({ title, description, course }) => {
  return (
    // <div>
      <div className="teacher-card group  shadow-shadow-auth">
        <div className="contact-teachers">
          <div className=" bi bi-instagram icons-contact  mt-3 "></div>
          <div className=" bi bi-telegram icons-contact"></div>
          <div className=" bbi bi-linkedin icons-contact"></div>
        </div>
        <img
          src={teacher}
          alt="picture"
          className="rounded-xl "
        />
        <div className="teachers-text">
          <div className="flex justify-between">
            <div className="font-normal">
              <h2 className="text-xl"> {title}</h2>
              <p className=" text-sm text-lightPink "> {course}</p>
              <p className="text-xs mt-2  opacity-80"> {description}</p>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default TeacherCard;
