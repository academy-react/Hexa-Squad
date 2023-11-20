import React, { Fragment, useState, useRef } from "react";
import onSubmit from "../../../core/services/api/PostData/addProfileImage";

const AddProfileImageModal = () => {
    const [images, setImages] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    const selectFiles = () => {
        fileInputRef.current.click();
    }

    const onFileSelect = (e) => {
        const files = e.target.files;
        if(files.length === 0) return;
        for(let i = 0; i < files.length; i++) {
            if(files[i].type.split('/')[0] !== 'image') continue;
            if(!images.some((item) => item.name === files[i].name)) {
                setImages((prevImages) => [
                    ...prevImages,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i]),
                    },
                ]);
            }
        }
    }

    const deleteImage = (index) => {
        setImages((prevImages) =>
            prevImages.filter((_, i) => i !== index)
        );
    }

    const onDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
        e.dataTransfer.dropEffect = "copy";
    }

    const onDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    }

    const onDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const files = e.dataTransfer.files;
        for(let i = 0; i < files.length; i++) {
            if(files[i].type.split('/')[0] !== 'image') continue;
            if(!images.some((item) => item.name === files[i].name)) {
                setImages((prevImages) => [
                    ...prevImages,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i]),
                    },
                ]);
            }
        }
    }

    const uploadImages = () => {
        console.log('Images: ', images);
    }

    return(
        <Fragment>
            <div className="selectImageModal">

                <label htmlFor="showSelectImageModal" className="cursor-pointer">
                    <i className="bi bi-x absolute top-2 z-50 right-5 text-slate-600 dark:text-semiWhite2 text-4xl"></i>
                </label>
                
                <div className="card p-4 rounded-md overflow-hidden text-black">
                    <div className="text-center">
                        <p className="text-blue-700 mt-4">Please Select Or Darg Your Image</p>
                    </div>
                    <div 
                        onDragOver={onDragOver}
                        onDragLeave={onDragLeave}
                        onDrop={onDrop}
                        className="drag-area h-40 rounded-md border-2 border-dashed border-blue-600 text-blue-700 dark:text-slate-100 bg-slate-100 dark:bg-darkblue4 flex justify-center items-center select-none mt-3 focus-visible:text-lg"
                    >
                        {isDragging ? (
                            <span className="select text-violet-800 dark:text-slate-400 cursor-pointer ml-1 duration-300 hover:opacity-60">
                                Drop images here
                            </span> 
                        ) : (
                            <>
                                Drag & Drop image here or {"  "}
                                <button 
                                    className="select text-violet-800 dark:text-slate-400 border-2 border-violet-800 bg-slate-100 rounded-md p-1 cursor-pointer ml-1 duration-300 hover:opacity-60"
                                    onClick={selectFiles}
                                >
                            Browse
                        </button>
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
                                    onClick={() => deleteImage(index)}
                                    className="delete absolute -top-1 right-2 text-2xl cursor-pointer z-50 text-blue-700">&times;
                                </span>
                                <i 
                                    className="bi bi-file-earmark-plus delete absolute  left-2 text-xl cursor-pointer z-50 text-blue-700"
                                
                                ></i>
                                <img 
                                    src={images.url} 
                                    alt={images.name} 
                                    className="w-full h-full rounded-md" 
                                />
                            </div>
                        ))}
                    </div>
                    <button 
                        // onClick={uploadImages}
                        onClick={onSubmit}
                        type="button" 
                        className="primary-btn absolute bottom-4 z-50 inset-x-3 mx-auto hover:scale-100 text-white rounded py-2 px-3 w-[90%]"
                    >
                        Upload
                    </button>
                </div>


            </div>
        </Fragment>
    )
}
export default AddProfileImageModal;