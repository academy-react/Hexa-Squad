import React from "react";
import ShoppingCart from "../../assets/icons/shopping-cart-svgrep.svg";
import TitleRight from "../../assets/icons/title right.svg";
const TitleSection = ({title}) => {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between w-full border-b-[2px] border-solid border-[#ccccd66f] pb-4 gap-4 ">
      <div className="text-[#666666] text-4xl md:flex hidden  gap-4">
        <i class="bi bi-cart"></i>
        <i class="bi bi-bell"></i>
      </div>
      <div className="text-[#3F3F47] px-12 relative">
        <img
          src={TitleRight}
          className="absolute top-[0] right-1"
          alt="TitleRight"
        />
        <h2 className="relative z-10 text-3xl md:text-4xl text-right">{title}</h2>
      </div>
    </div>
  );
};

export default TitleSection;
