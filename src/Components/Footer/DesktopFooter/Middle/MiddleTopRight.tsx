import React from "react";

function MiddleTopRight() {
  return (
    <div className="max-md:flex max-md:justify-center">
      <input
        type="text"
        className="bg-transparent p-1 border-b-[1px] border-solid text-white border-[#9a9a9a] max-md:w-11/12 max-md:mx-auto"
        placeholder="Track Exchange ID"
      />
    </div>
  );
}

export default MiddleTopRight;
