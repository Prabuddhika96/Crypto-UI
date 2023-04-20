import React from "react";
import MIddleTopLeft from "./MIddleTopLeft";
import MiddleTopRight from "./MiddleTopRight";

function MiddleTop() {
  return (
    <div className="w-8/12 mx-auto px-5">
      <div className="flex justify-between">
        <MIddleTopLeft />
        <MiddleTopRight />
      </div>
    </div>
  );
}

export default MiddleTop;
