import React, { Fragment, useState } from "react";
import ReactStars from "react-rating-stars-component";
import handleNewsRate from "../../core/services/api/PostData/addNewsRate";

const NewsRate = ({setStars}) => {

    // const ratingChanged = (newRating) => {
    //     setStars(newRating);
    //     // console.log(newRating);
    // };
  return (
    
      <Fragment>
        <ReactStars
            count={5}         
            size={28}
            // isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
            // onChange={(e) => {
            //     ratingChanged(e);
            // }}  
            onChange={(e) => {handleNewsRate(e)}}
        />
      </Fragment>
  );
};

export default NewsRate;
