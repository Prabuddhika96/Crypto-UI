import React from "react";
import TopButtons from "./TopButtons";

function TopSection() {
  return (
    <div className="flex items-center justify-between w-8/12 gap-10 mx-auto max-md:block max-md:w-full max-md:px-5">
      <div className="flex w-6/12 max-md:justify-start max-md:w-full">
        <h1 className="text-5xl text-white max-md:text-3xl">How It Works</h1>
      </div>
      <div className="flex justify-center w-6/12 max-md:w-full max-md:block">
        <TopButtons />
      </div>
    </div>
  );
}

export default TopSection;
