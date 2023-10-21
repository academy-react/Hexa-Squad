import React from "react";

const TopicButtons = ({ heading, content }) => {
  return (
    <div class="tab  bg-newPurpleAlpha mb-1 bg-white px-5 py-3 shadow-lg rounded-md relative peer">
      <label
        className="flex items-center text-lg font-bold cursor-pointer
        after:absolute "
      >
        <h2>{heading}</h2>
      </label>
    </div>
  );
};

export default TopicButtons;
