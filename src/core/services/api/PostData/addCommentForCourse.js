import http from "../../interceptor";
import formData from "../FormData";
const commentForCourse = async(value) =>{
  
  const obj ={
    Title : value.Title,
    Describe : value.Describe,
    CourseId : value.CourseId

  }
  const data = formData(obj)
  try{
    const result = await http.post("/Course/AddCommentCourse", data)
    // setUserComment(result)
    

} catch (error) {
    console.log('error is:', error)
}
}
export default commentForCourse;