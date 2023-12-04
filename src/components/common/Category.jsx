import React from "react";
import { Link } from "react-router-dom";

const Category = ({link,image,title}) => {
  return (
    <Link
      to={link}
      className="categories-box odd:lg:mt-28"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <img className="categories-img" src={image} />
      <span className="categories-name">{title} </span>
    </Link>
  );
};

export default Category;
