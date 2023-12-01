import { toast } from "react-toastify";
import Http from "../../interceptor";
const onSubmit = async (api, value, dataBody, ToastObj, handleClick) => {
  try {
    const result = await Http.post(api, dataBody);
    try {
      if (result.success) {
        toast.success(result.message);
        setTimeout(() => {
          handleClick("next");
        }, 3500);
      } else {
        // result.errors ==
        toast.error(result.errors == null ? result.message : result.errors[0]);
      }
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
export default onSubmit;
