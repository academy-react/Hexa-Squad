const onDeleteEditProfileImageFormData = (value) => {
    const deleteImageData = new FormData();
  
    deleteImageData.append("DeleteEntityId", value);
  
    return deleteImageData;
};
export default onDeleteEditProfileImageFormData;