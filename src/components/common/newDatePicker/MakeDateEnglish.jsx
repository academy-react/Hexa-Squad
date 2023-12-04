import moment from "jalali-moment";

const MakeDateEnglish = (time) => {
  const date = moment
    .from(time, "fa", "YYYY-MM-DD")
    .local("en")
    .format("YYYY-MM-DD");

  return date;
};

export default MakeDateEnglish;