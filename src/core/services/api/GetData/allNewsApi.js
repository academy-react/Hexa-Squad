import http from "../../interceptor";

const fetchNewsApi =  async (setNewsData, setNewsAllData, pageCount, countInPage ) => {
  try {
    const result = await http.get(
      `/News?PageNumber=${pageCount}&RowsOfPage=${countInPage}&SortingCol=InsertDate&SortType=DESC&Query=`
    );

    setNewsData(result.news);
    setNewsAllData(result.news);

  } catch (error) {
    console.log(error);
    return [];
  }
};
export default fetchNewsApi;
