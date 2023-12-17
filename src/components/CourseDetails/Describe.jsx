import React, { Fragment, useEffect, useState } from "react";

const Describe = ({ describe }) => {
  const [Desc, setDesc] = useState();
  const [isObject, setIsObject] = useState(false);
  const loadContent = () => {
    console.log(describe);
    return Desc.blocks?.map((block, ind) => {
      switch (block.type) {
        case "paragraph":
          return (
            <p
              key={ind}
              className=" text-zinc-700 mt-3 leading-10 mb-1 lg:ml-8 md:mx-2  dark:text-indigo-200 text-justify"
            >
              {block?.data?.text}
            </p>
          );
        case "header":
          return (
            <div className="h-24 text-neutral-900 my-1 dark:text-slate-200">
              {block?.data?.level == 1 && (
                <h1 className="mb-2 text-4xl font-medium">
                  {block?.data?.text}
                </h1>
              )}
              {block?.data?.level == 2 && (
                <h2 className="mb-2 text-3xl  font-medium">
                  {block?.data?.text}
                </h2>
              )}
              {block?.data?.level == 3 && (
                <h2 className="mb-2 text-2xl font-medium">
                  {block?.data?.text}
                </h2>
              )}
              {block?.data?.level == 4 && (
                <h4 className="mb-2 text-xl font-medium">
                  {block?.data?.text}
                </h4>
              )}
              {block?.data?.level == 5 && (
                <h5 className="mb-2 text-lg font-medium">
                  {block?.data?.text}
                </h5>
              )}
              {block?.data?.level == 6 && (
                <h6 className="mb-2  text-base font-medium">
                  {block?.data?.text}
                </h6>
              )}
            </div>
            // <Fragment>

            // </Fragment>
          );

        case "delimiter":
          return (
            <hr className="h-px my-8 border-indigo-600 border-opacity-70 border-1 dark:bg-gray-700" />
          );

        case "image":
          return <img src={block.data.file.url} alt={block.data.caption} />;
        case "heckList":
          return (
            <div className="text-slate-800 my-2">
              {block?.data?.items.map((item, index) => (
                <div className="flex gap-3 mb-2 text-lg">
                  <input
                    type="checkbox"
                    id={index}
                    // disabled
                    className="accent-violet-900"
                    checked={item.checked}
                  />
                  <label htmlFor={index}>{item.text}</label>
                </div>
              ))}
            </div>
          );
        case "warning":
          return (
            <div className="rounded-md bg-yellow-50 p-4 my-1">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <i
                    className="bi bi-exclamation-triangle h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    {block?.data?.title}
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    {block?.data?.message && <p>{block?.data?.message}</p>}
                  </div>
                </div>
              </div>
            </div>
          );
        case "list":
          return (
            <div className="flow-root">
              <ul className="-mb-8"></ul>
            </div>
          );
        // anything else

        default:
          return <></>;
      }
    });
  };
  useEffect(() => {
    if (describe) {
      console.log("describe", describe);
      if (describe.includes("blocks", "{", "}")) {
        const newDescribe = JSON.parse(describe);
        setDesc(newDescribe);
        console.log("describe json", describe);
        setIsObject(true);
      } else {
        setDesc(describe);
      }
    }
  }, [describe]);

  return (
    <div className="py-4">
      <div className="text-slate-600 w-full mt-6 ">
        {isObject ? loadContent() : Desc}
      </div>
    </div>
  );
};

export default Describe;
