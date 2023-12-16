import React, { Fragment, useState, useEffect } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import http from "../../core/services/interceptor/index";
const AddNewsReply = ({
  parentId,
  title,
  describe,
  setAdminComment,
  NewsId,
  uid,
}) => {
  const initialValues = {
    describe: describe,
  };

  const addReplyComment = async (value) => {
    try {
      const response = await http.post("/News/CreateNewsReplyComment", {
        NewsId: NewsId,
        parentId: uid,
        title: "title test",
        describe: value.describe,
      });
      console.log(response);
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
    addReplyComment(value);

    try {
      const result = await http.get(`/News/GetRepliesComments?Id=` + uid);
      setAdminComment(result);
    } catch (error) {}
  };
  useEffect(() => {
    handle();
  }, []);
  return (
    <Fragment>
      <div>
        {/* <p className="inline text-base md:text-xl lg:text-xl text-darkblue2 dark:text-[#9996F9] lg:pr-4">
        {userInfo.fName + " " + userInfo.lName}
      </p> */}
      </div>
      <Formik initialValues={initialValues} onSubmit={handle}>
        <Form>
          <div className="flex flex-row h-8 mt-6 ">
            <label htmlFor="describe" className="hidden">
              describe
            </label>
            <Field
              type="text"
              id="describe"
              name="describe"
              placeholder="نظر خود را وارد کنید"
              className="h-full px-2  rounded-s-lg text-xs  w-full lg:w-[250px] py-2 bg-[#dbd9ff]   text-darkblue2 dark:text-[#7e7cb1] border-2 border-indigo-400 dark:border-[#3d3d70]   dark:bg-darkblue6 focus-visible:outline-2 focus-visible:border-2 dark:focus-visible:outline dark:focus-visible:border-2 dark:focus-visible:outline-indigo-800 focus-visible:outline focus-visible:outline-lightblue"
            />
            <ErrorMessage name="describe" component="div" />

            <button
              type="submit"
              className="border px-2  border-indigo-400 hover:bg-lightblue cursor-pointer bg-[#7c75ff]  rounded-none rounded-e-md md:w-[100px]  lg:w-12 h-full  lg:mb-20"
            >
              <h2 className="bi bi-send text-sm"></h2>
            </button>
          </div>
        </Form>
      </Formik>
    </Fragment>
  );
};

export default AddNewsReply;
