import React from "react";
import { AiFillStar } from "react-icons/ai";

function TopBtn({ logo, name, ratings, rate }: any) {
  const stars = [];
  for (let i = 0; i < ratings; i++) {
    stars.push(<AiFillStar key={i} />);
  }

  return (
    <button className="flex items-center justify-center px-5 h-16 bg-[#a2a2a248] rounded-xl">
      <div className="">
        <div className="flex items-center justify-start gap-3">
          <img src={logo} alt="" width={"25px"} />
          <p className="text-white">{name}</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex text-[#7a7a7a]">{stars}</div>
          <p className="text-white">{rate}</p>
        </div>
      </div>
    </button>
  );
}

export default TopBtn;
