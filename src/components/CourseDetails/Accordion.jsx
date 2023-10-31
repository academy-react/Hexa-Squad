import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
const Accordion = ({ title, desc, title2 }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h1 className="text-base  flex flex-row gap-2 dark:text-indigo-300  text-blue-100 py-3 px-2">
          <AiOutlinePlayCircle className="w-5 h-5 " />
          {title}
        </h1>
        <BiChevronDown
          className={`text-3xl transition-all duration-500 ml-1 ${
            show ? "rotate-180 " : ""
          }`}
        />
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-clip"
          >
            <p className="text-sm md:text-base bg-[#ded9ff] dark:bg-darkblue  rounded-b-md">
              <div className=" w-full text-violet-600 dark:text-indigo-300 pt-1">
                <div className="bg-[#C9C6FF] dark:bg-[#6636f7] py-2  ">
                  <span className="cursor-pointer px-2">{desc}</span>
                </div>
                <div className="bg-[#C9C6FF] dark:bg-[#6636f7] py-2 mt-1 rounded-b-md ">
                  <span className="cursor-pointer px-2 ">{title2}</span>
                </div>
              </div>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;
