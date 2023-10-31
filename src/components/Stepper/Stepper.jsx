import React, { useEffect, useState, useRef } from "react";
import { TiTick } from "react-icons/ti";
const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };
  useEffect(() => {
    //create object
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );
    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);
  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index === newStep.length - 1
            ? " flex items-center "
            : " w-full flex items-center"
        }
      >
        <div className="relative flex flex-col items-center text-newPurple dark:text-indigo-400">
          <div
            className={`rounded-full transition duration-500 ease-in-out dark:border-2 dark:border-indigo-900
            border-2 border-[#ccbef5] md:w-10 md:h-10  w-8 h-8 flex items-center justify-center py-3 ${
              step.selected
                ? " bg-newPurple2 text-[#ffff] border-none "
                : ""
            }`}
          >
            {step.completed ? <TiTick size={24} /> : index + 1}
            {/* Display number */}
          </div>
          <div
            className={`absolute top-0 text-center md:mt-16 mt-10 w-32 text-xs ${
              step.highlighted ? " text-darkblue6 dark:text-indigo-100 " : " text-[#6a6472] dark:text-indigo-500 "
            } `}
          >
            {/* display description */}
            {step.description}
          </div>
        </div>
        <div
          className={`flex-auto border-t-4 transition duration-500 ease-in-out ${
            step.completed ? "border-lightPink2  " : " border-[#ccbef5] dark:border-indigo-900"
          }`}
        >
          {/* display line */}
        </div>
      </div>
    );
  });
  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  );
};

export default Stepper;
