import http from "../../../../../core/services/interceptor";

const AddImageProfile = async (value) => {
  try {
    const response = await http.post("/SharePanel/AddProfileImage", value);
    return response;
  } catch (error) {
    return false;
  }
};

export default AddImageProfile;