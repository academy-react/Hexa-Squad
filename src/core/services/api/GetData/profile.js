import http from "../../interceptor";

export const getProfile = async (user) => {
  try {
    const response = await http.get("/SharePanel/GetProfileInfo");
    return response;
  } catch (error) {
    return false;
  }
};
