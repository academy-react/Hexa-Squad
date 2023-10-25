import React, { useState } from "react";
import TeacherInfo from "./TeacherProfile/TeacherInfo";

const TeacherProfile = () => {
    const [teacherInfo, setTeacherInfo] = useState([
        {
          title: "دکتر محمد بحرالعلومی",
          education: "متخصص فرانت اند",
          experiences: "دکتر بحرالعلومی، دکتری مهندسی نرم افزار دارند. همچنین مدرس نمونه دانشگاه علم و فناوری مازندران هستند.",
          number: "09112233445",
          email: "bahr.academy@gmail.com",
          imageUrl:
            "https://toplearn.com/img/user/teachers/user-profile-%DB%8C%DA%A9-%D8%B4%D9%86%D8%A8%D9%87-%DB%B7-%D8%A7%D8%B1%D8%AF%DB%8C%D8%A8%D9%87%D8%B4%D8%AA-%DB%B1%DB%B3%DB%B9%DB%B9-98501911-414.jpg",
        }
    ])
    const mapTeacherInfo = teacherInfo.map((item, index) => {
        return (
            <TeacherInfo 
                key={index}
                title={item.title}
                education={item.education}
                experiences={item.experiences}
                number={item.number}
                email={item.email}
                image={item.imageUrl}
            />
        )
    })
    return (
        <div className="py-32"  data-aos="zoom-out">
            <div className="w-[90%] overflow-hidden text-3xl lg:max-w-[1260px] py-12 mx-auto bg-[#D7D5FF] shadow-shadow-Categories-box rounded-2xl dark:bg-darkblue6">
                {mapTeacherInfo}
            </div>
        </div>
    )
}
export default TeacherProfile;