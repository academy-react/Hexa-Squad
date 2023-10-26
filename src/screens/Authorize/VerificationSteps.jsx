import React, { useState } from "react";
import { Link } from "react-router-dom";

import { StepperContext } from "../../contexts/StepperContext";
import ChangePassword from "../../components/Stepper/Steps/ChangePassword";
import Stepper from "../../components/Stepper/Stepper";
import StepperControl from "../../components/Stepper/StepperControl";
import VerificationCode from "../../components/Stepper/Steps/VerificationCode";
import FirstStepPassword from "../../components/Stepper/Steps/FirstStepPassword";

import ForgetPassword from "../../assets/image/forgetPassword.svg";

const VerificationSteps = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["شماره تماس", "دریافت کد", " تغییر رمزعبور"];
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <FirstStepPassword />;
      case 2:
        return <VerificationCode />;
      case 3:
        return <ChangePassword />;
      default:
    }
  };
  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <div className="bg-lightPink min-h-screen flex items-center justify-center px-16">
      <div className=" relative w-full max-w-lg mx-auto mb-20 ">
        <div className=" h-full absolute right-32">
          <div className=" absolute -top-4 left-20  w-60 h-60 bg-[#b07eff] rounded-full opacity-80 mix-blend-multiply filter blur-xl  animate-blob hidden lg:block"></div>
          <div className=" absolute top-0 -right-10 w-72 h-72 bg-lightPink2 rounded-full opacity-80  mix-blend-multiply  filter blur-xl  animate-blob animation-delay-2000  hidden lg:block"></div>
          <div className=" absolute  -bottom-28 left-10 w-72 h-72 bg-[#7D67FF] rounded-full opacity-70 mix-blend-multiply  filter blur-xl  animate-blob animation-delay-4000  hidden lg:block"></div>
        </div>
        <div className="bg-[#e4dbff] mx-auto right-14 bg-opacity-60 rounded-lg relative h-96 w-[300px] md:min-w-[100vh] md:right-[160px] lg:min-w-[90vh] lg:h-[70vh]  lg:top-10 lg:right-40 xl:min-w-[173vh] xl:min-h-[70vh] xl:right-96 xl:top-10">
          <div className="w-[420px] h-full top-5  absolute right-10 hidden xl:block">
            <img
              src={ForgetPassword}
              className="object-cover rounded-e-xl hidden lg:block"
              alt=""
            />
          </div>
          <div className="bg-[#ECE9FF] rounded-md rounded-e-xl -top-10 md:top-0 w-[400px] h-[540px] md:block md:w-[800px] lg:h-full md:h-[520px] absolute ">
            <Link to="/">
              {" "}
              <h1 className="bi bi-house-door md:text-2xl text-xl text-[#6652eb] absolute left-4 top-4"></h1>
            </Link>

            <Link to={"/authorize/login"}>
              <h1 class="bi bi-box-arrow-in-right text-base md:text-xl  text-[#6652eb] absolute right-4 top-4"></h1>
              <h2 className="text-xs md:text-sm absolute right-[40px] top-4 text-[#6652eb]">
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
  );
};

export default VerificationSteps;
