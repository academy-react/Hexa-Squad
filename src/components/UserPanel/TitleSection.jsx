import React from "react";
import ShoppingCart from "../../assets/icons/shopping-cart-svgrep.svg";
import TitleRight from "../../assets/icons/title right.svg";
const TitleSection = ({title}) => {
  return (
    <div className="flex justify-between w-full border-b-[2px] border-solid border-[#ccccd66f] pb-4 ">
      <div className="text-[#666666] text-4xl flex gap-4">
        <i class="bi bi-cart"></i>
        <i class="bi bi-bell"></i>
      </div>
      <div className="text-[#3F3F47] px-12 relative text-4xl">
        <img
          src={TitleRight}
          className="absolute top-[0] right-1"
          alt="TitleRight"
        />
        <h2 className="relative z-10">{title}</h2>
      </div>
    </div>
  );
};

export default TitleSection;
