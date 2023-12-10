import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import http from "../../core/services/interceptor/index";
import { getProfile } from "../../core/services/api/GetData/profile";
import getProfileInfo from "../../core/services/api/GetData/getProfileInfo";
import { toast } from "react-toastify";

const InputComment = ({ question, name, setComment, accept }) => {
  const [urlParam, setUrlParam] = useState(useParams());
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getProfileInfo(setUserInfo);
  }, []);

  const initialValues = {
    Title: name,
    Describe: question,
  };

  const addComment = async (value) => {
    try {
      let formData = new FormData();
      formData.append("CourseId", urlParam.id);
      formData.append("Title", value.Title);
      formData.append("Describe", value.Describe);

      const response = await http.post("/Course/AddCommentCourse", formData);
      if (response.success) {
        toast.success(" کامنت شما ثبت شد");
      } else {
        toast.error(" لطفا متن کامنت را به درستی وارد کنید");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  const handle = async (value) => {
    addComment(value);

    let result = await http.get("/Course/GetCourseCommnets/" + urlParam.id);
    setComment(result);
  };
  const handleClick = async () => {
    const user = await getProfile();
    if (user == false) {
      showLoginModal.click();
      return false;
    } else {
      handle(value);
      return true;
    }
  };
  useEffect(() => {
    handle();
  }, []);
  return (
    <Fragment>
      <h2 className="text-xl md:text-3xl lg:text-3xl text-darkblue2 dark:text-[#6974FF] pt-4 lg:pr-2 pb-8">
        افزودن نظر
      </h2>
      <div>
        <p className="inline text-base md:text-xl lg:text-xl text-darkblue2 dark:text-[#9996F9] lg:pr-4">
          {userInfo ? " " : userInfo.fName + " " + userInfo.lName}
        </p>
      </div>
      <Formik initialValues={initialValues} onSubmit={handle}>
        <Form>
          <div className="flex flex-col">
            <label htmlFor="Title" className="hidden">
              Title
            </label>
            <Field
              id="Title"
              name="Title"
              placeholder=" عنوان پیام را وارد کنید"
              className="comment-input h-14 mt-4"
            />
            <ErrorMessage name="Title" component="div" />
          </div>

          <div>
            <label htmlFor="Describe" className="hidden">
              Describe
            </label>
            <Field
              as="textarea"
              id="Describe"
              name="Describe"
              placeholder="پیام خود را وارد کنید"
              className="comment-input mt-4 h-40 "
            />
            <ErrorMessage name="Describe" component="div" />
          </div>

          <button
            type="submit"
            className="primary-btn md:w-[150px] lg:w-[180px] mt-8  lg:mr-6 lg:mb-20"
            onClick={handleClick}
          >
            ثبت نظر
          </button>
        </Form>
      </Formik>
    </Fragment>
  );
};

export default InputComment;
