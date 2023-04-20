import React from "react";
import { FaPlay } from "react-icons/fa";
import btc from "Img/btc.png";
import eth from "Img/eth.png";
import { BsArrowRight } from "react-icons/bs";

function VideoSection() {
  const handlePlay = () => {
    alert();
  };
  return (
    <div className="flex items-center justify-center w-8/12 gap-1 mx-auto max-md:block max-md:w-full">
      <div className="flex items-center justify-center w-6/12 max-md:w-full max-md:hidden">
        <div className="bg-blue-900 min-w-[450px] h-[300px] rounded-2xl mx-auto flex items-center justify-center">
          <div
            className="z-10 p-10 text-4xl text-white duration-200 ease-in-out bg-blue-600 rounded-full hover:bg-blue-700"
            onClick={handlePlay}>
            <FaPlay />
          </div>
        </div>
      </div>

      <div className="w-6/12 px-0 max-md:w-full max-md:px-4">
        <p className="text-sm text-[#859AB5] my-5">Watch a tutorial</p>
        <p className="my-5 text-5xl max-md:text-3xl">Detailed Video Guide</p>
        <div className="flex items-center justify-start gap-3 my-5">
          <img src={btc} width={"25px"} alt="" />
          <p className="text-base text-black">BTC</p>
          <BsArrowRight />
          <img src={eth} width={"25px"} alt="" />
          <p className="text-base text-black">ETH</p>
        </div>
        <p className="text-base text-[#859AB5] my-5">
          You are welcome to learn more about every step of the crypto exchange
          on SimpleSwap. Find all the necessary instructions in this video.
        </p>
      </div>

      {/* responsive */}
      <div className="flex items-center justify-center w-6/12 my-6 max-md:w-full md:hidden">
        <div className="bg-blue-900 min-w-[450px] h-[300px] rounded-2xl mx-auto flex items-center justify-center">
          <div
            className="z-10 p-10 text-4xl text-white duration-200 ease-in-out bg-blue-600 rounded-full hover:bg-blue-700"
            onClick={handlePlay}>
            <FaPlay />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
