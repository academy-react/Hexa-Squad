import http from "../../../../../core/services/interceptor";

const SelectImageProfile = async (value) => {
  try {
    const response = await http.post(
      "/SharePanel/SelectProfileImage",
      value
    );

    return response;
  } catch (error) {
    return false;
  }
};
export default SelectImageProfile;