import React, { Fragment, useState } from "react";
import ReactStars from "react-rating-stars-component";
import handleNewsRate from "../../core/services/api/PostData/addNewsRate";

const NewsRate = ({setNewsRate, stars}) => {

    // const [stars, setStars] = useState(0);
    // const ratingChanged = (newRating) => {
    //     setStars(newRating);
    //     // console.log(newRating);
    // };
    // const ratingChanged = (newRating) => {
    //   console.log(newRating)
    // }
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
            onChange={() => handleNewsRate(setNewsRate, stars)}
        />
      </Fragment>
  );
};

export default NewsRate;
