import React, { useState , useEffect } from "react";
import { StepperContext } from "../../contexts/StepperContext";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Stepper from "../../components/Stepper/Stepper";
import StepperControl from "../../components/Stepper/StepperControl";
import VerificationCode from "../../components/Stepper/Steps/VerificationCode";
import PersonalInfo from "../../components/Stepper/Steps/PersonalInfo";
import PhoneNumber from "../../components/Stepper/Steps/PhoneNumber";
import LastStep from "../../components/Stepper/Steps/LastStep";

import RegisterImage from "../../assets/image/RegisterNew.svg";
import RegisterDark from "../../assets/image/registerDark.svg"
import { onThemeChange } from "../../redux/darkMode";

const Register = () => {
  const htmlTag = document.querySelector("html");
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["شماره تماس", "دریافت کد", "مشخصات کاربری", "تکمیل ثبت نام"];
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const theme = useSelector((state)=>state.darkModeSlice.theme);
  const dispatch = useDispatch();

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <PhoneNumber />;
      case 2:
        return <VerificationCode />;
      case 3:
        return <PersonalInfo />;
      case 4:
        return <LastStep />;
      default:
    }
  };
  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  const setLightMode = (theme)=>{
    dispatch(onThemeChange(theme));
  }
  const changeTheme = () => {
    setLightMode(!theme);
    theme ? (htmlTag.className = "dark") : (htmlTag.className = "");
  };
  return (
    <div className="bg-lightPink dark:bg-indigo-950 overflow-hidden min-h-screen flex items-center justify-center px-16 ">
      <div className=" relative w-full max-w-lg  mb-20">
        <div className="h-full absolute right-32">
          <div className=" absolute -top-4 left-20 w-60 h-60  dark:mix-blend-lighten dark:bg-lightPink2 bg-[#b07eff] dark:opacity-40 rounded-full opacity-80 mix-blend-multiply filter blur-xl  animate-blob hidden lg:block"></div>
          <div className=" absolute top-0 -right-10 w-72 h-72 dark:mix-blend-lighten  dark:bg-violet-800 bg-lightPink2 rounded-full opacity-80  mix-blend-multiply  filter blur-xl  animate-blob animation-delay-2000  hidden lg:block"></div>
          <div className=" absolute  -bottom-28 left-10 w-72 h-72 dark:mix-blend-lighten dark:bg-violet-950  bg-[#7D67FF] rounded-full opacity-70 mix-blend-multiply  filter blur-xl  animate-blob animation-delay-4000  hidden lg:block"></div>
        </div>
        <div
          data-aos="zoom-in-left"
          className="bg-[#e4dbff] dark:bg-indigo-800 dark:bg-opacity-30 mx-auto right-14 bg-opacity-60 rounded-lg relative h-96 w-[300px] md:min-w-[100vh] md:right-[150px] lg:min-w-[90vh] lg:h-[70vh]  lg:top-10 lg:right-40 xl:min-w-[173vh] xl:min-h-[70vh] xl:right-96 xl:top-10"
        >
          <div className="w-[460px] h-full top-20 absolute right-2 hidden xl:block">
            <img
              src={RegisterImage}
              className="object-cover rounded-e-xl hidden lg:block dark:hidden"
              alt=""
            />
            <img
              src={RegisterDark}
              className="object-cover rounded-e-xl hidden lg:hidden dark:block "
              alt=""
            />
          </div>

          <div className="bg-[#ECE9FF] dark:bg-darkblue2 rounded-md rounded-e-xl -top-10 md:top-0 w-[400px] h-[540px] md:block md:w-[800px] lg:h-full md:h-[520px] absolute ">
            <Link to="/">
              {" "}
              <h1 className="bi bi-house-door md:text-2xl text-xl dark:text-indigo-300 text-[#6652eb] absolute left-4 top-4"></h1>
            </Link>
            <h2
              className={
                theme === true
                  ? "dark" +
                    " bi bi-brightness-high cursor-pointer text-[#6652eb] absolute left-14 top-4 text-xl "
                  : "light" +
                    "bi bi-moon text-[#ffffff] cursor-pointer absolute left-14 top-4 text-xl"
              }
              onClick={changeTheme}
            ></h2>

            <Link to={"/authorize/login"}>
              <h1 class="bi bi-box-arrow-in-right text-base md:text-xl dark:text-indigo-300 text-[#6652eb] absolute right-4 top-4"></h1>
              <h2 className="text-xs md:text-sm dark:text-indigo-300 absolute right-[35px] md:right-[40px]  top-4 text-[#6652eb]">
                {" "}
                ورود به سایت
              </h2>
            </Link>
            <div className="mt-10 p-10">
              <StepperContext.Provider
                value={{
                  userData,
                  setUserData,
                  finalData,
                  setFinalData,
                }}
              >
                {displayStep(currentStep)}
              </StepperContext.Provider>
            </div>
            <div className=" right-0 md:mt-48  text-[#ffff] w-full" dir="ltr">
              <div className="container horizontal mt-60 md:mt-0">
                <StepperControl
                  handleClick={handleClick}
                  currentStep={currentStep}
                  steps={steps}
                />
                <div className="md:mt-20 mt-16 ">
                  <Stepper steps={steps} currentStep={currentStep} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
