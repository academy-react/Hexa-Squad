import React, { Fragment, useState, useRef } from "react";
import { toast } from "react-toastify";
import http from "../../../core/services/interceptor";
import getProfileInfo from "../../../core/services/api/GetData/getProfileInfo";

const AddImageModal = (setUserInfo) => {
  const [images, setImages] = useState([]);
  const [imageFile, setImageFile] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const selectFiles = () => {
    fileInputRef.current.click();
  };

  const onFileSelect = (e) => {
    const files = e.target.files;
    setImageFile(files);
    console.log("file=", files);
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((item) => item.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
            file: files[i],
          },
        ]);
      }
    }
  };

  const deleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
    e.dataTransfer.dropEffect = "copy";
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    setImageFile(files);

    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((item) => item.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
            file: files[i],
          },
        ]);
      }
    }
  };

  // Add Image
  const onSubmit = async () => {
    const data = new FormData();
    try {
        Object.keys(imageFile).map(m => imageFile[m]).map((image) => {
        data.append("formFile", image);
      });
    } catch (error) {
        console.log(error)
    }

    try {
      const result = await  toast.promise( http.post("/SharePanel/AddProfileImage", data),
      {
        pending: "در حال اضافه کردن عکس ها ",
      }
      )
      if (result.success) {
        toast.success(result.message);
        getProfileInfo(setUserInfo);
      } else if (!result.success) {
        toast.error(result.message);
      }
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <div className="selectImageModal dark:bg-indigo-800">
        <label htmlFor="showSelectImageModal" className="cursor-pointer">
          <i 
            className="bi bi-x absolute top-2 z-50 right-5 text-slate-600 dark:text-semiWhite2 text-4xl"
          ></i>
        </label>

        <div className="card p-4 rounded-md overflow-hidden">
          <div className="text-center">
            <p className="text-blue-700 dark:text-slate-200 mt-4">
              لطفا عکس مورد نظر خود را انتخاب یا به اینجا بکشید
            </p>
          </div>
          <div
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            className="drag-area gap-x-2 h-40 rounded-md border-2 border-dashed border-blue-600 dark:border-slate-400 text-blue-700 dark:text-slate-100 bg-slate-100 dark:bg-darkblue4 flex justify-center items-center select-none mt-3 focus-visible:text-lg"
          >
            {isDragging ? (
              <span className="select text-violet-800 dark:text-slate-400 cursor-pointer ml-1 duration-300 hover:opacity-60">
                عکس را در این قسمت رها کنید
              </span>
            ) : (
              <>
                <button
                  className="select text-violet-800 border-2 border-violet-800 bg-slate-100 rounded-md p-1 cursor-pointer ml-1 duration-300 hover:opacity-60"
                  onClick={selectFiles}
                >
                  انتخاب عکس
                </button>
                عکس ها را به اینجا بکشید و اینجا رها کنید یا
              </>
            )}

            <input
              type="file"
              name="file"
              className="file"
              multiple
              ref={fileInputRef}
              onChange={onFileSelect}
            />
          </div>
          <div className="container w-full h-auto flex justify-start items-start flex-wrap max-h-52 overflow-y-auto mt-3">
            {images.map((images, index) => (
              <div
                key={index}
                className="image w-28 mr-1 h-28 relative m-4 border-2 border-violet-600 rounded-md"
              >
                <span
                  className="delete absolute -top-1 right-2 text-2xl cursor-pointer z-50 text-blue-700"
                  onClick={() => deleteImage(index)}
                >
                  &times;
                </span>
                <img
                  src={images.url}
                  alt={images.name}
                  className="w-full h-full rounded-md"
                />
              </div>
            ))}
          </div>
          <button
            onClick={onSubmit}
            type="button"
            className="primary-btn absolute bottom-4 z-50 inset-x-3 mx-auto hover:scale-100 text-white rounded py-2 px-3 w-[90%]"
          >
            بارگذاری عکس
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default AddImageModal;
