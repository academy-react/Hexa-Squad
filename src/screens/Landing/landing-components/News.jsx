import React, { useState } from "react";

import NewsCard from "./NewsCard";
const News = () => {
  const [index, setIndex] = useState(0);

  let data = [
    {
      name: "چگونه مطالعه موثر را برای شما آسانتر کنیم.",
      img: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "چگونه مطالعه موثر را برای شما آسانتر کنیم.",
      img: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    {
      name: "چگونه مطالعه موثر را برای شما آسانتر کنیم.",
      img: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "چگونه مطالعه موثر را برای شما آسانتر کنیم.",
      img: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  const prevSlide = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };

  const nextSlide = () => {
    if (index + 1 <= data.length - 1) {
    }
    setIndex(index + 1);
  };

  const handleMouseDown = (e) => {
    let card = e.target;
    let offset = 0;
    let initialX = e.clientX;
    document.onmousemove = onMouseMove;
    document.onmouseup = onMouseUp;

    function onMouseMove(e) {
      if (offset <= -100) {
        slideRight();
        if (index === data.length - 1) {
          card.style.left = 0;
        } else {
          setTimeout(() => {
            card.style.left = 0;
          }, 1000);
        }
        return;
      }

      if (offset >= 100) {
        slideLeft();
        if (index === 0) {
          card.style.left = 0;
        } else {
          setTimeout(() => {
            card.style.left = 0;
          }, 1000);
        }
        return;
      }
    }

    // offset = e.clientX - initialX;
    // card.style.left = offset + "px";

    function onMouseUp(e) {
      if (offset < 0 && offset > -100) {
        card.style.left = 0;
      }
      if (offset < 0 && offset < 100) {
        card.style.left = 0;
      }
      document.onmousemove = null;
      document.onmouseup = null;
    }
  };

  return (
    <section>
      <h1 className="title">
        اخبار و مقالات
        <span className="absolute w-[100%]  block mt-3 h-2 my-1 bg-gradient-to-l from-newPurpleAlpha2 to-transparentPurple2"></span>
      </h1>
      <div className="flex lg:flex-row  overflow-hidden lg:gap-5   max-w-[1300px] w-full mx-auto py-16 px-20  h-[600px]  relative group">
        {data.map((news, n) => {
          let position =
            n > index ? "nextCard" : n === index ? "activeCard" : "prevCard";
          return (
            <NewsCard
              handleMouseDown={handleMouseDown}
              {...news}
              cardStyle={position}
            />
          );
        })}

        <div
          onClick={prevSlide}
          className="hidden group-hover:block bi bi-chevron-left absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-5xl rounded-full p-2   text-[#fff] cursor-pointer"
        ></div>
        <div
          onClick={nextSlide}
          className=" hidden group-hover:block bi bi-chevron-right absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-5xl rounded-full p-2  text-[#fff]  cursor-pointer"
        ></div>
      </div>
    </section>
  );
};

export default News;
