import moment from "jalali-moment";

const MakeDatePickerDatePersian = (time) => {
  const date = moment(time, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD");

  return date;
    // var date = new date(gregoriandate);
    // var day = date.getdate();
    // var month = date.getmonth() + 1;
    // var year = date.getfullyear();
    // var fullyear = year + '/' + month + '/' + day;
    // return fullyear;
};

export default MakeDatePickerDatePersian ;