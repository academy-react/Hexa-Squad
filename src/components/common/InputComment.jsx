import React, { Fragment, useState, useEffect } from "react";
import AddNewsComments from "../../core/services/api/PostData/addNewsComments";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import http from "../../core/services/interceptor/index";
import getProfileInfo from "../../core/services/api/GetData/getProfileInfo";
import addCommentForCourse from "../../core/services/api/PostData/addCommentForCourse";
const InputComment = () => {
  const [comment, setComment] = useState([]);
  const [urlParam, setUrlParam] = useState(useParams());
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getProfileInfo(setUserInfo);
  }, []);
  const initialValues = {
    // Title:"",
    Describe: "",
  };
  const addComment = async (value) => {
    try {
      let formData = new FormData();
      formData.append("CourseId", urlParam.id);
      formData.append("Title", "hi");
      formData.append("Describe", value.Describe);

      const response = await http.post("/Course/AddCommentCourse", formData);
      console.log(urlParam.id);
      console.log(value.Describe);
      console.log(response);

      console.log("Comment submitted successfully!");
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  // const handle = async (value) => {
  //   addComment(value);
  //   let result = await http.get("/Course/GetCourseCommnets/" + urlParam.id);
  //   setComment(result);
  // };
  return (
    // <Fragment>
    //   <h2 className="text-xl md:text-3xl lg:text-3xl text-darkblue2 dark:text-[#6974FF] pt-4 lg:pr-2 pb-8">
    //     افزودن نظر
    //   </h2>
    //   <div>
    //     <p className="inline text-base md:text-xl lg:text-xl text-darkblue2 dark:text-[#9996F9] lg:pr-4">
    //       {userInfo.fName + userInfo.lName}
    //     </p>
    //     {/* <p className="inline text-sm md:text-base lg:text-base text-lightblue4 dark:text-[#9996F9] pr-4">
    //       تاریخ:{date}{" "}
    //     </p> */}
    //   </div>
    //   <p className="text-base md:text-lg lg:text-lg text-lightblue4 dark:text-[#6974FF] lg:pr-4 pt-8">
    //     عنوان
    //   </p>
    //   <Formik
    //     initialValues={{
    //       comment: " ",
    //     }}
    //     onSubmit={(value) => addComment(value)}
    //     // validationSchema={validation}
    //     // enableReinitialize={true}
    //   >
    //     <Form className="editProf-input">
    //       <Field
    //         // name="title"
    //         type={"text"}
    //         className="comment-input h-14"
    //       />
    //     </Form>
    //   </Formik>
    //   <p className="text-base md:text-lg lg:text-lg text-lightblue4 dark:text-[#6974FF] lg:pr-4 pt-4">
    //     دیدگاه شما
    //   </p>
    //   <textarea className="comment-input mt-4" defaultValue={""}></textarea>
    //   <button
    //     // type="submit"
    //     className="primary-btn md:w-[150px] lg:w-[180px] mt-8 lg:mt-12 lg:mr-6 lg:mb-20"
    //     onClick={(value) => addCommentForCourse(value)}
    //   >
    //     ثبت دیدگاه
    //   </button>
    // </Fragment>

    <Formik initialValues={initialValues} onSubmit={addComment}>
      <Form>
        {/* <div>
          <label htmlFor="Title">Title</label>
          <Field
            type="text"
            id="Title"
            name="Title"
            className="text-red-600"
          />
          <ErrorMessage name="Title" component="div" />
        </div> */}

        <div>
          <label htmlFor="Describe">Describe</label>
          <Field
            as="textarea"
            id="Describe"
            name="Describe"
            placeholder="پیام خود را وارد کنید"
            className="text-red-500"
          />
          <ErrorMessage name="Describe" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default InputComment;
