import http from "../../interceptor";

const fetchNewsApi =  async (setNewsData, setNewsAllData) => {
  try {
    const result = await http.get(
      `/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC&Query=`
    );

    setNewsData(result.news);
    setNewsAllData(result.news);

  } catch (error) {
    console.log(error);
    return [];
  }
};
export default fetchNewsApi;
