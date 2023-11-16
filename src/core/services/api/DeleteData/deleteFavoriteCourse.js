import Http from "../../interceptor";

export const deleteFavoriteCourse = async (courseId) => {
  let result = await Http.delete("/Course/DeleteCourseFavorite", {data:{CourseFavoriteId:courseId}});
  console.log(result);
};
