import http from "../../interceptor";
import { toast } from "react-toastify";
import { getProfile } from "../GetData/profile";

const handleCourseRate = async (courseId, stars) => {
    const user = await getProfile();
    if (user == false) {
      showLoginModal.click();
    } else {
      try {
        const result = await http.post(
          `/Course/SetCourseRating?CourseId=${courseId}&RateNumber=${stars}`
        );
        if (result.success === true) {
          toast.success(result.message)
          // setNewsRate(stars);
        } else {
          toast.error(result.message)
        }
      } catch (error) {
        console.error(error);
      }
    }
};
export default handleCourseRate;