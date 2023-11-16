const onFormData = (obj) => {
    const formData = new FormData();
    Object.keys(obj).forEach((key) => {
        const itemValue = obj[key]
        formData.append(key, itemValue)
    });
    return formData;
}

export default onFormData;