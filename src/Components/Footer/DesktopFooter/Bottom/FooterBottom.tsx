import React from "react";
import {
  AiFillYoutube,
  AiOutlineCopyright,
  AiOutlineTwitter,
} from "react-icons/ai";
import FooterBottomListElement from "./FooterBottomListElement";
import { RiFacebookFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

function FooterBottom() {
  return (
    <div className="w-8/12 mx-auto px-5 max-md:w-full">
      <div className="flex justify-between max-md:block">
        <p className="flex items-center gap-3">
          <AiOutlineCopyright /> 2018 - 2023 SimpleSwap
        </p>

        <div className="max-md:w-full">
          <ul
            className={`text-center items-center flex text-base gap-x-3 max-md:justify-between max-md:mt-3`}>
            <FooterBottomListElement icon={<AiOutlineTwitter />} />
            <FooterBottomListElement icon={<RiFacebookFill />} />
            <FooterBottomListElement icon={<FaTelegramPlane />} />
            <FooterBottomListElement icon={<BsDiscord />} />
            <FooterBottomListElement icon={<RiFacebookFill />} />
            <FooterBottomListElement icon={<AiFillYoutube />} />
            <FooterBottomListElement icon={<RiFacebookFill />} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
