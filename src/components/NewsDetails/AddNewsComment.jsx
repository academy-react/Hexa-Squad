import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import http from "../../core/services/interceptor/index";
import { getProfile } from "../../core/services/api/GetData/profile";
import getProfileInfo from "../../core/services/api/GetData/getProfileInfo";
import { toast } from "react-toastify";

const AddNewsComment = ({ question, name, uid, NewsId, setComment }) => {
  const [urlParam, setUrlParam] = useState(useParams());
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getProfileInfo(setUserInfo);
  }, []);
  const initialValues = {
    title: name,
    describe: question,
  };

  const addComment = async (value) => {
    try {
      const response = await http.post("/News/CreateNewsComment", {
        NewsId: urlParam.id,
        title: value.title,
        describe: value.describe,
      });

      console.log(response);
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

    const result = await http.get(
      "/News/GetNewsComments?NewsId=" + urlParam.id
    );
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
      <div className="lg:my-10 md:my-20">
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
              <label htmlFor="title" className="hidden">
                title
              </label>
              <Field
                id="title"
                name="title"
                placeholder=" عنوان پیام را وارد کنید"
                className="comment-input h-14 mt-4"
              />
              <ErrorMessage name="title" component="div" />
            </div>

            <div>
              <label htmlFor="describe" className="hidden">
                describe
              </label>
              <Field
                as="textarea"
                id="describe"
                name="describe"
                placeholder="پیام خود را وارد کنید"
                className="comment-input mt-4 h-40 "
              />
              <ErrorMessage name="describe" component="div" />
            </div>

            <button
              type="submit"
              onClick={handleClick}
              className="primary-btn md:w-[150px] lg:w-[180px] mt-8  lg:mr-6 lg:mb-20"
            >
              ثبت نظر
            </button>
          </Form>
        </Formik>
      </div>
    </Fragment>
  );
};

export default AddNewsComment;
