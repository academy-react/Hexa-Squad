import http from "../../../../../core/services/interceptor";

const DeleteImageProfile = async (value) => {
  try {
    const response = await http.delete("/SharePanel/DeleteProfileImage", {
      data: value,
    });

    return response;
  } catch (error) {
    return false;
  }
};
export default DeleteImageProfile;