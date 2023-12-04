import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

const Rate = (
  {
    id, 
    handleRate, 
    currentUserSetRate, 
    currentUserRateNumber
  }
  ) => {

  const [stars, setStars] = useState();
  console.log("data.currentUserSetRate=", currentUserRateNumber)

  const ratingChanged = (newRating) => {
    setStars(newRating);
    handleRate(id, newRating)
  };

  return (
    <div dir="ltr">
      <ReactStars
        count={5}         
        size={28}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
        onChange={(e) => ratingChanged(e)}
        value={currentUserSetRate === true ? currentUserRateNumber : stars}
      />
    </div>
  );
};

export default Rate;
