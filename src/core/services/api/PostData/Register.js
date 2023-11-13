import { toast } from "react-toastify";
import Http from "../../interceptor";
const onSubmit = async (api,value,dataBody,ToastObj,handleClick) => {
    console.log(value);
    try {
      await toast.promise(
        Http.post(api,dataBody),
        ToastObj
      );
      try {
        setTimeout(() => {
          handleClick("next");
        }, 3500);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
};
export default onSubmit;