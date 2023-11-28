import React, { useState, useEffect, useRef } from "react";
import AddMultipleImage from "../../../../core/services/api/PostData/AddMultipleImage";

// User Profile Picture import
import UserProfilePicture from '../../../../assets/image/user-circle-icon.png';

const UploadMultipleImage = () => {
//   const onDrop = useCallback((acceptedFiles) => {
//     console.log(acceptedFiles);
//   }, []);


  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [progressInfos, setProgressInfos] = useState({ val: [] });
  const [message, setMessage] = useState([]);
  const [imageInfos, setImageInfos] = useState([]);
  const progressInfosRef = useRef(null);

  useEffect(() => {
    AddMultipleImage.getFiles().then((response) => {
      setImageInfos(response);
    });
  }, []);

  const selectFiles = (event) => {
    let images = [];

    for (let i = 0; i < event.target.files.length; i++) {
      images.push(URL.createObjectURL(event.target.files[i]));
    }

    setSelectedFiles(event.target.files);
    setImagePreviews(images);
    setProgressInfos({ val: [] });
    setMessage([]);
  };

  const upload = (idx, file) => {
    let _progressInfos = [...progressInfosRef.current.val];
    return AddMultipleImage.upload(file, (event) => {
      _progressInfos[idx].percentage = Math.round(
        (100 * event.loaded) / event.total
      );
      setProgressInfos({ val: _progressInfos });
    })
      .then(() => {
        setMessage((prevMessage) => [
          ...prevMessage,
          "Uploaded the image successfully: " + file.name,
        ]);
      })
      .catch(() => {
        _progressInfos[idx].percentage = 0;
        setProgressInfos({ val: _progressInfos });

        setMessage((prevMessage) => [
          ...prevMessage,
          "Could not upload the image: " + file.name,
        ]);
      });
  };

  const uploadImages = () => {
    const files = Array.from(selectedFiles);

    let _progressInfos = files.map((file) => ({
      percentage: 0,
      fileName: file.name,
    }));

    progressInfosRef.current = {
      val: _progressInfos,
    };

    const uploadPromises = files.map((file, i) => upload(i, file));

    Promise.all(uploadPromises)
      .then(() => AddMultipleImage.getFiles())
      .then((files) => {
        setImageInfos(files.data);
      });

    setMessage([]);
  };

  return (
    <div className="selectImageModal dark:bg-indigo-800">

      <label htmlFor="showSelectImageModal" className="cursor-pointer">
        <i className="bi bi-x absolute top-2 z-50 right-5 text-slate-600 dark:text-semiWhite2 text-4xl"></i>
      </label>
        
      <div className="flex flex-row">
        <div className="w-8/12">
          <label className=" p-0">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={selectFiles}
            />
          </label>
        </div>

        <div className="w-4/12">
          <button
            className="primary-btn text-white"
            disabled={!selectedFiles}
            onClick={uploadImages}
          >
            Upload
          </button>
        </div>
      </div>

      {progressInfos &&
        progressInfos.val.length > 0 &&
        progressInfos.val.map((progressInfo, index) => (
          <div className="mb-2" key={index}>
            <span>{progressInfo.fileName}</span>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" 
                role="progressbar"
                aria-valuenow={progressInfo.percentage}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: progressInfo.percentage + "%" }}
              >
                {progressInfo.percentage}%
              </div>
            </div>
          </div>
        ))}

      {imagePreviews && (
        <div>
          {imagePreviews.map((img, i) => {
            return (
              <img className="preview" src={img} alt={"image-" + i} key={i} />
            );
          })}
        </div>
      )}

      {message.length > 0 && (
        <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 mt-2" role="alert">
          <ul>
            {message.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>
        </div>
      )}

      {imageInfos.length > 0 && (
        <div className="flex flex-row mx-2 mt-3">
          <div className="text-black">List of Images</div>
          <div className="flow-root">
          <ul role="list" className="listdivide-y divide-gray-200 dark:divide-gray-700-group list-group-flush">
            {imageInfos &&
              imageInfos.map((img, index) => (
                <li className="py-3 sm:py-4" key={index}>
                  <p>
                    <a href={img.url}>{img.name}</a>
                  </p>
                  <img src={img.url} alt={img.name} className="h-20 w-80" />
                </li>
              ))}
          </ul>
          </div>
        </div>
      )}
      
    </div>
  );
};
export default UploadMultipleImage;