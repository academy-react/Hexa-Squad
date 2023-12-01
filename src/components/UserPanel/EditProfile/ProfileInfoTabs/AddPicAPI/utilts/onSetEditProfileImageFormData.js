const onSetEditProfileImageFormData = (value) => {
    const imageData = new FormData();
  
    imageData.append("formFile", value);
  
    return imageData;
};
export default onSetEditProfileImageFormData;  