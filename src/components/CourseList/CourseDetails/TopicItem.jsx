import { React, useState } from "react";

const TopicItem = () => {
  const [items, setItems] = useState([
    {
      heading: "fd ساداتی ",
      content: "iecjponcnokjncmjknjjkncdjo;nfojvkcnm;olk;",
    },
    {
      heading: "محمدرضا ساداتی ",
      content: "iecjponcnokjncmjknjjkncdjo;nfojvkcnm;olk;",
    },
  ]);
  return (
    
    <div
      id="collapseOne5"
      class="!visible"
      data-te-collapse-item
      data-te-collapse-show
      aria-labelledby="headingOne5"
    >
      <div class="px-2 my-2">
        <button
          class="group relative flex w-full items-center rounded-t-[15px] px-4 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
          type="button"
          data-te-collapse-init
          data-te-target="#collapseOne5"
          aria-expanded="true"
          aria-controls="collapseOne5"
        >
          <h2 className="ml-2 h-8 w-8  grid place-items-center text-white rounded-full bg-newPurpleAlpha2">
            01
          </h2>
          مقدمه
        </button>
      </div>
    </div>
  );
};

export default TopicItem;
