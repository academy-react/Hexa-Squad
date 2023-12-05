import React, { useState, useEffect, Fragment } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { StepperContext } from "../../contexts/StepperContext";
import ChangePassword from "../../components/Stepper/Steps/ChangePassword";
import Stepper from "../../components/Stepper/Stepper";
import StepperControl from "../../components/Stepper/StepperControl";
import VerificationCode from "../../components/Stepper/Steps/VerificationCode";
import FirstStepPassword from "../../components/Stepper/Steps/FirstStepPassword";

import ForgetPassword from "../../assets/image/forgetPassword.svg";
import ForgetPasswordDark from "../../assets/image/forgetPasswordDark.svg";
import { useDispatch, useSelector } from "react-redux";
import { onThemeChange } from "../../redux/darkMode";
import Copyrights from "../../components/common/Copyrights";
import LoadingSpinner from "../../components/common/loadingSpinner";

const VerificationSteps = () => {
  const navigator = useNavigate();
  const param = useParams();
  const htmlTag = document.querySelector("html");
  const [config, setConfig] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["شماره تماس", "دریافت کد", " تغییر رمزعبور"];
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const theme = useSelector((state) => state.darkModeSlice.theme);
  const dispatch = useDispatch();
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <FirstStepPassword handleClick={handleClick} />;
      case 2:
        return <VerificationCode handleClick={handleClick} config={config} />;

      case 3:
        return <ChangePassword />;

      default:
    }
  };
  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    // alert(newStep);
    // navigator("/authorize/Verification/" + newStep--);
  };

  const setLightMode = (theme) => {
    dispatch(onThemeChange(theme));
  };
  const changeTheme = () => {
    setLightMode(!theme);
    theme ? (htmlTag.className = "dark") : (htmlTag.className = "");
  };
  useEffect(() => {
    console.log(param);
    let step = param.step;
    let config = param.config;
    console.log(step++);
    step && setCurrentStep(step--);
    config && setConfig(config);
  }, []);

  return (
    <Fragment>
      <LoadingSpinner />
      <div className="bg-lightPink min-h-screen overflow-hidden dark:bg-indigo-950  flex items-center justify-center px-16">
        <div className=" relative w-full max-w-lg mx-auto mb-20 ">
          <div className=" h-full absolute right-32">
            <div className=" absolute -top-4 left-20  w-60 h-60 bg-[#b07eff] dark:bg-lightPink2 dark:opacity-40 dark:mix-blend-lighten rounded-full opacity-80 mix-blend-multiply filter blur-xl  animate-blob hidden lg:block"></div>
            <div className=" absolute top-0 -right-10 w-72 h-72 bg-lightPink2 dark:bg-violet-800 dark:mix-blend-lighten rounded-full opacity-80  mix-blend-multiply  filter blur-xl  animate-blob animation-delay-2000  hidden lg:block"></div>
            <div className=" absolute  -bottom-28 left-10 w-72 h-72 bg-[#7D67FF] dark:bg-violet-950 dark:mix-blend-lighten rounded-full opacity-70 mix-blend-multiply  filter blur-xl  animate-blob animation-delay-4000  hidden lg:block"></div>
          </div>
          <div
            data-aos="zoom-in-right"
            className="  relative   mx-auto right-14   h-96 w-[300px] md:w-full md:h-[520px]  md:right-[160px]    lg:top-10 lg:right-40   xl:right-96 xl:top-10"
          >
            <div className="w-[490px] dark:bg-indigo-800 dark:bg-opacity-30 bg-opacity-60 rounded-lg ml-[780px] bg-[#e4dbff] h-full   hidden xl:block">
              <img
                src={ForgetPassword}
                className="object-cover w-[400px] mx-auto pt-10  rounded-e-xl hidden lg:block dark:hidden"
                alt=""
              />
              <img
                src={ForgetPasswordDark}
                className="object-cover w-[400px] mx-auto pt-10  rounded-e-xl hidden lg:hidden dark:block  "
                alt=""
              />
            </div>
            <div className="bg-[#ECE9FF] dark:bg-darkblue2  rounded-md rounded-e-xl -top-10 md:top-0 w-[400px] h-[540px] md:block md:w-[800px] lg:h-full md:h-[520px] absolute ">
              <Link to="/">
                {" "}
                <h1 className="bi bi-house-door md:text-2xl dark:text-indigo-200 text-xl text-[#6652eb] absolute left-4 top-4"></h1>
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
                <h1 class="bi bi-box-arrow-in-right dark:text-indigo-200 text-base md:text-xl  text-[#6652eb] absolute right-4 top-4"></h1>
                <h2 className="text-xs md:text-sm dark:text-indigo-200 absolute right-[40px] top-4 text-[#6652eb]">
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
              <div className=" right-0 mt-48 text-[#ffff] w-full" dir="ltr">
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
      <Copyrights />
    </Fragment>
  );
};

export default VerificationSteps;
