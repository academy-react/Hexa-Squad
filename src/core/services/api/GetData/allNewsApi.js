import axios from "axios";

const fetchNewsApi =  async (setNewsData, setNewsAllData) => {
  console.log("fetching started...")
  try {
    const result = await axios.get(
      `https://api-academy.iran.liara.run/api/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC&Query=`
    );

    setNewsData(result.data.news);
    setNewsAllData(result.data.news);
    console.log('the data get from api: ', result.data.news);

  } catch (error) {
    console.log(error);
  }
};
export default fetchNewsApi;
