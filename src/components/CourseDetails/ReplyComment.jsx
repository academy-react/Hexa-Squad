import React from "react";
import { motion } from "framer-motion";
import AdminComments from "../common/AdminComments";

const ReplyComment = ({ author, title, desc, pictureAddress, insertDate }) => {
  return (
    <>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "auto" }}
        exit={{ height: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-clip"
      >
        
        
        <div className=" w-full bg-[#d0cdff] py-1 dark:bg-indigo-700 dark:text-indigo-300 ">
          <AdminComments
            title={title}
            desc={desc}
            author={author}
            insertDate={insertDate}
            pictureAddress={pictureAddress}
          />
        </div>
      </motion.div>
    </>
  );
};

export default ReplyComment;
