import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

// User Profile Picture import
import UserProfilePicture from '../../../../assets/image/user-circle-icon.png';

const AddImageDropzoneModal = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div className="selectImageModal">

        <label htmlFor="showSelectImageModal" className="cursor-pointer">
            <i className="bi bi-x absolute top-2 z-50 right-5 text-slate-600 dark:text-semiWhite2 text-4xl"></i>
        </label>
        
      <div className="col-span-5"></div>
      <div className="w-full h-[140px] col-span-2">
        <figure className="border-[3px] border-solid border-bluePrimary w-[140px] h-[140px] rounded-full mx-auto">
          <img
            className="w-[120px] h-[120px] rounded-full mx-auto my-[7px] shadow-lg shadow-gray-400"
            src={UserProfilePicture}
            alt="User Profile Picture"
          />
        </figure>
      </div>
      <div className="col-span-5"></div>

      <div className="col-span-4"></div>

      <div className="border-2 border-solid border-bluePrimary col-span-4 h-[160px] bg-indigo-100 rounded-lg text-center leading-[155px] text-[12px] text-gray-500">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>لطفا فایل ها را اینجا قرار دهید . . . </p>
          ) : (
            <p>
              برخی از فایل‌ها را به اینجا بکشید یا رها کنید یا برای انتخاب
              فایل‌ها کلیک کنید
            </p>
          )}
        </div>
      </div>

      <div className="col-span-4"></div>
    </div>
  );
};
export default AddImageDropzoneModal;