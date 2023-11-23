import React, { Fragment, useState } from "react";
import ReactStars from "react-rating-stars-component";

const NewsRate = ({stars, setStars, handleNewsRate}) => {

    // const [stars, setStars] = useState(0);
  const ratingChanged = (newRating) => {
    setStars(newRating);
  };

  return (
    
      <Fragment>
        <div 
          dir="ltr"
          onClick={handleNewsRate}
        >
          <ReactStars
              count={5}         
              size={28}
              // isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
              onChange={(e) => ratingChanged(e)}
              // value={stars}
          />
        </div>
      </Fragment>
  );
};

export default NewsRate;
