import React, { Fragment, useState, useEffect } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import http from "../../core/services/interceptor/index";
import { getProfile } from "../../core/services/api/GetData/profile";
// import addReplyComment from "../../core/services/api/PostData/addReplyComment";
import getProfileInfo from "../../core/services/api/GetData/getProfileInfo";
import { useParams } from "react-router-dom";

const AddReplyComment = ({
  setAdminComment,
  courseId,
  uid,
  title,
  desc,
  accept,
}) => {
  const initialValues = {
    Describe: desc,
  };

  const addReplyComment = async (value) => {
    try {
      let formData = new FormData();
      formData.append("CommentId", uid);
      formData.append("CourseId", courseId);
      formData.append("Title", " reply to this comment");
      formData.append("Describe", value.Describe);

      const response = await http.post(
        "/Course/AddReplyCourseComment",
        formData
      );

      if (response.success) {
        toast.success(" ریپلای شما ثبت شد");
      } else {
        toast.error("لطفا متن کامنت را به درستی وارد کنید");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  const handle = async (value) => {
    if (accept === true) {
      addReplyComment(value);
      let result = await http.get(
        `/Course/GetCourseReplyCommnets/${courseId}/${uid}`
      );
      setAdminComment(result);
    } else {
      toast.error(" به کامنت اکسپت نشده نمیتوان ریپلای کرد ");
    }

    // let result = await http.get(
    //   `/Course/GetCourseReplyCommnets/${courseId}/${uid}`
    // );
    // setAdminComment(result);
  };

  return (
    <Fragment>
      <div>
        {/* <p className="inline text-base md:text-xl lg:text-xl text-darkblue2 dark:text-[#9996F9] lg:pr-4">
          {userInfo.fName + " " + userInfo.lName}
        </p> */}
      </div>
      <Formik initialValues={initialValues} onSubmit={handle}>
        <Form>
          <div className="flex flex-row  h-8 mt-6 ">
            {/* <div className="flex flex-col">
              <label htmlFor="Title" className="hidden">
                Title
              </label>
              <Field
                type="text"
                id="Title"
                name="Title"
                placeholder=" عنوان پیام را وارد کنید"
                className="comment-input h-14 mt-4"
              />
              <ErrorMessage name="Title" component="div" />
            </div> */}

            <label htmlFor="Describe" className="hidden">
              Describe
            </label>
            <Field
              type="text"
              id="Describe"
              name="Describe"
              placeholder="نظر خود را وارد کنید"
              className="h-full px-2   rounded-s-lg text-xs  w-full lg:w-[250px]  py-2 bg-[#dbd9ff] text-darkblue2 dark:text-[#7e7cb1] border-2 border-indigo-400 dark:border-[#3d3d70]   dark:bg-darkblue6 focus-visible:outline-2 focus-visible:border-2 dark:focus-visible:outline dark:focus-visible:border-2 dark:focus-visible:outline-indigo-800 focus-visible:outline focus-visible:outline-lightblue"
            />
            <ErrorMessage name="Describe" component="div" />

            <button
              type="submit"
              className="border px-2  border-indigo-400 hover:bg-lightblue cursor-pointer bg-[#7c75ff]  rounded-none rounded-e-md md:w-[100px]  lg:w-12 h-full  lg:mb-20"
            >
              <h2 class="bi bi-send text-sm"></h2>
            </button>
          </div>
        </Form>
      </Formik>
    </Fragment>
  );
};

export default AddReplyComment;
