import React, { Fragment, useState } from "react";
import ReactStars from "react-rating-stars-component";
import handleNewsRate from "../../core/services/api/PostData/addNewsRate";

const NewsRate = ({data}) => {

  const [stars, setStars] = useState(0);
  const [newsRate, setNewsRate] = useState();
  const ratingChanged = (newRating) => {
    setStars(newRating);
  };

  console.log("mystars=",stars)
  console.log("myID=",data.id)

  return (
      <Fragment>
        <div 
          dir="ltr"
          onClick={() => handleNewsRate(data, stars, setNewsRate)}
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
              value={newsRate}
          />
        </div>
      </Fragment>
  );
};

export default NewsRate;
