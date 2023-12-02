const onSelectEditProfileImageFormData = (value) => {
    const selectImageData = new FormData();
  
    selectImageData.append("ImageId", value);
  
    return selectImageData;
};
export default onSelectEditProfileImageFormData;