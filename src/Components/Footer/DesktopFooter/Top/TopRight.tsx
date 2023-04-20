import React from "react";
import { FaCcVisa } from "react-icons/fa";

function TopRight() {
  return (
    <div className="flex gap-3 items-center px-2 max-md:text-sm">
      <p>Buy & sell crypto</p>
      <p className="text-2xl">
        <FaCcVisa />
      </p>
    </div>
  );
}

export default TopRight;
