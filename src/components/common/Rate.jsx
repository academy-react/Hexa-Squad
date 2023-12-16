import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

const Rate = (
  {
    id, 
    handleRate, 
    currentUserSetRate, 
    currentUserRateNumber,
  }
  ) => {
  
  console.log("currentUserSetRate=",currentUserSetRate)
  console.log("currentUserRateNumber=",currentUserRateNumber)

  const ratingChanged = (newRating) => {
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
        value={currentUserSetRate ? currentUserRateNumber : ""}
      />
      {/* {currentUserSetRate ?
        currentUserRateNumber && 
        <ReactStars
          count={5}         
          size={28}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
          onChange={(e) => ratingChanged(e)}
          value={currentUserSetRate ? currentUserRateNumber : ""}
        /> :
        <ReactStars
          count={5}         
          size={28}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
          onChange={(e) => ratingChanged(e)}
        />
      } */}
    </div>
  );
};

export default Rate;