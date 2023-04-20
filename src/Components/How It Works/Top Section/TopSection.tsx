import React from "react";
import TopButtons from "./TopButtons";

function TopSection() {
  return (
    <div className="flex items-center justify-between w-10/12 gap-10 mx-auto">
      <div className="flex justify-center w-6/12">
        <h1 className="text-5xl text-white">How It Works</h1>
      </div>
      <div className="flex justify-center w-6/12">
        <TopButtons />
      </div>
    </div>
  );
}

export default TopSection;
