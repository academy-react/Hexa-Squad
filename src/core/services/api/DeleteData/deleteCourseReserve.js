import { toast } from "react-toastify";
import http from "../../interceptor";

const deleteCourseReserve = async (id)=>{
    // toast.error('این دوره از قبل در دوره های شما موجود است');
    const result = await http.delete("/CourseReserve", {
      data: { id: id },
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.errors == null ? result.message : result.errors[0]);
    }
} 
export default deleteCourseReserve;