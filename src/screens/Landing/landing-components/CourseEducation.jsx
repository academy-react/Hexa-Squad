import React, { Fragment, useState } from "react";
import "./common.css";
import "../../../index.css";
import Course from "./course-components/Course";

const CourseEducation = () => {
    const [coursesList, setCoursesList] = useState([
        { title: "آموزش Figma", professorName: "دکتر بحرالعلوم", price: "14000 تومان" },
        { title: "آموزش Node.js", professorName: "دکتر بحرالعلوم", price: "14000 تومان"  },
        { title: "آموزش JavaSript", professorName: "دکتر بحرالعلوم", price: "14000 تومان"  },
        { title: "آموزش React.js", professorName: "دکتر بحرالعلوم", price: "14000 تومان"  },
      ]);

    return (
        <div className="lg:max-w-[1269px] md:max-w-[750px] sm:min-w-[640px] mx-auto ">
            <div className="course">
                <h1 className="title lg:mt-40 mt-20 lg:block">دوره های آموزشی 
                    <span className="absolute w-[100%] w-0 block mt-3 h-2 my-1 bg-gradient-to-l from-newPurpleAlpha2 to-transparentPurple2"></span>
                </h1>
                <button className="primary-btn w-auto h-10 float-left mt-[-50px] ml-6 py-1 md:block lg:hidden">مشاهده ی همه</button>
            </div>
            <div className="mt-28 flex flex-wrap gap-4 lg:flex-row">
                {coursesList.map((item, index) => {
                    return (
                        <>
                            <Course
                                title={item.title}
                                professorName={item.professorName}
                                price={item.price}
                            />
                        </>
                    );
                })}
            </div>
            <button className="flex justify-center primary-btn text-center w-56 mx-auto my-16 hidden lg:block">مشاهده ی همه</button>
        </div>
    )
}

export default CourseEducation;