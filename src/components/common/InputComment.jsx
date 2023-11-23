import React, { Fragment } from "react";
import AddNewsComments from "../../core/services/api/PostData/addNewsComments";
import { ErrorMessage, Field, Form, Formik } from "formik";

const InputComment = () => {

  return (
    <Fragment>
      <h2 className="text-xl md:text-3xl lg:text-3xl text-darkblue2 dark:text-[#6974FF] pt-4 lg:pr-2 pb-8">
        افزودن نظر
      </h2>
      <div>
        <p className="inline text-base md:text-xl lg:text-xl text-darkblue2 dark:text-[#9996F9] lg:pr-4">
          محمدرضا ساداتی
        </p>
        <p className="inline text-sm md:text-base lg:text-base text-lightblue4 dark:text-[#9996F9] pr-4">
          تاریخ:1402/07/20{" "}
        </p>
      </div>
      <p className="text-base md:text-lg lg:text-lg text-lightblue4 dark:text-[#6974FF] lg:pr-4 pt-8">
        عنوان
      </p>
      <Formik
        // initialValues={{
        //   title: "",
        // }}
        // validationSchema={validation}
        // enableReinitialize={true}
      >
        <Form className="editProf-input">
          <Field             
              // name="title"
              type={"text"} 
              className="comment-input h-14"
          />
        </Form>
      </Formik>
      <p className="text-base md:text-lg lg:text-lg text-lightblue4 dark:text-[#6974FF] lg:pr-4 pt-8">
        دیدگاه شما
      </p>
      <textarea className="comment-input" defaultValue={""} ></textarea>
      <button 
        className="primary-btn md:w-[150px] lg:w-[180px] mt-8 lg:mt-12 lg:mr-6 lg:mb-20"
        // onClick={AddNewsComments}
        >
        ثبت دیدگاه
      </button>
    </Fragment>
  );
};

export default InputComment;
