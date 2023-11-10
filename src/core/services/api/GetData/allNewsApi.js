import http from "../../interceptor";

const fetchNewsApi =  async (setNewsData, setNewsAllData) => {
  console.log("fetching started...")
  try {
    const result = await http.get(
      `/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC&Query=`
    );

    setNewsData(result.news);
    setNewsAllData(result.news);
    console.log('the data get from api: ', result.news);

  } catch (error) {
    console.log(error);
    return [];
  }
};
export default fetchNewsApi;
