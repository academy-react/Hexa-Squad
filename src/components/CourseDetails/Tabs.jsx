import React, { useState } from "react";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className=" mt-32 lg:mx-14 md:mr-5 mx-3 mb-10 ">
       
        <div className="flex cursor-pointer max-w-lg md:mx-auto lg:mx-0">
          {children.map((child) => (
            <span
              key={child.props.label}
              className={`${
                activeTab === child.props.label
                  ? "text-[#ffff] rounded-t-lg  text-sm md:text-base bg-[#8c5eff] dark:bg-[#34239f]"
                  : "text-[#8c5eff] dark:text-indigo-300 text-sm md:text-base "
              } flex-1  font-medium py-2  text-center`}
              onClick={(e) => handleClick(e, child.props.label)}
            >
              {child.props.label}
            </span>
          ))}
       
      </div>
      <h2 className="border-b-2 text-[#C9C6FF] dark:text-indigo-900 w-[1140px] "></h2>
      <div className="py-2">
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Tabs;
