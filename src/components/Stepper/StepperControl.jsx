import React from "react";

const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="container flex justify-around mt-20 mb-8">
      <span
        onClick={() => handleClick()}
        className={` bg-[#e4dbff] dark:bg-indigo-800 dark:text-indigo-200 text-newPurple md:text-sm text-xs absolute left-6 py-2 px-4 md:rounded-xl rounded-lg cursor-pointer dark:hover:bg-indigo-700 hover:bg-newPurple2 hover:text-whitePink transition duration-200 ease-in-out 
        ${currentStep === 1 ? " opacity-50 hover:cursor-not-allowed" : ""}`}
      >
        مرحله ی قبل
      </span>

      <span
        onClick={() => handleClick("next")}
        className=" bg-[#e4dbff] dark:bg-indigo-800 dark:text-indigo-200 text-newPurple md:text-sm text-xs py-2 px-4 absolute right-6 md:rounded-xl rounded-lg cursor-pointer dark:hover:bg-indigo-700 hover:bg-newPurple2 hover:text-whitePink transition duration-200 ease-in-out"
      >
        {currentStep === steps.length ? "تکمیل فرایند" : "مرحله بعدی"}
      </span>
    </div>
  );
};

export default StepperControl;
