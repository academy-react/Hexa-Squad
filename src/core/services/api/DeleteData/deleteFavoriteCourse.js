import Http from "../../interceptor";

export const deleteFavoriteCourse = async (courseId) => {
  let result = await Http.delete("/Course/DeleteCourseFavorite", courseId);
  console.log(result);
};
