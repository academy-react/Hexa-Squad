import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

const Rate = ({id, handleRate}) => {

  const [stars, setStars] = useState(0);
  // const [newsRate, setNewsRate] = useState();

  const ratingChanged = (newRating) => {
    // console.log("newRating",newRating)
    setStars(newRating);
    console.log('newRating',newRating);
  };

  return (
        <div dir="ltr">
          <ReactStars
              count={5}         
              size={28}
              // isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
              onChange={(e) => ratingChanged(e)}
              value={stars}
          />
        </div>
  );
};

export default Rate;
