import http from "../../../interceptor";

const getNewsApi =  async (
  setNewsData, 
  setNewsAllData, 
  pageCount, 
  countInPage, 
  setIsLoading, 
  filterParams 
  ) => {
  // setIsLoading(true)
  try {
    const result = await http.get(
      `/News?PageNumber=${pageCount}&RowsOfPage=${countInPage}`,
      { params: filterParams }
    );
    
    setNewsData(result.news);
    setNewsAllData(result.news);
    setIsLoading(false)
  } catch (error) {
    console.log(error);
    return [];
  }
};
export default getNewsApi;
