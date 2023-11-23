import http from "../../interceptor";
import { toast } from "react-toastify";

const AddNewsComments = async (value, setComment) => {
    const data = {
        newsId: value.newsId,
        title: value.title,
        describe: value.describe
    }
    try {
        const result = await http.post("/News/CreateNewsComment", data);
        setComment([data]);
        console.log(result);
        if (result.success) {
            toast.success("نظر شما با موفقیت ثبت گردید")
        } else {
            toast.error(result.errors)
        }
    } catch (error) {
        console.log(error);
    }
}
export default AddNewsComments;