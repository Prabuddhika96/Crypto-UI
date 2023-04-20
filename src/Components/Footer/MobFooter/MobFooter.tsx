import React from "react";
import MIddleTopLeft from "../DesktopFooter/Middle/MIddleTopLeft";
import TopRight from "../DesktopFooter/Top/TopRight";
import FooterBtns from "../DesktopFooter/Top/FooterBtns";
import MiddleTopRight from "../DesktopFooter/Middle/MiddleTopRight";
import FooterBottom from "../DesktopFooter/Bottom/FooterBottom";
import Accordian from "./Accordian";

function MobFooter() {
  return (
    <div className="pt-4">
      <div className="border-b-[0.5px] border-solid border-[#9a9a9a44] pb-4">
        <MIddleTopLeft />
        <TopRight />
      </div>
      <div className="py-4 mx-auto w-full">
        <FooterBtns />
      </div>

      <div className="py-4 mx-auto w-full">
        <MiddleTopRight />
      </div>

      <div className="py-4 mx-auto w-full">
        <Accordian sections={sections} />
      </div>

      <div className="py-8 bg-[#010C22]">
        <FooterBottom />
      </div>
    </div>
  );
}

export default MobFooter;

const sections = [
  {
    title: "Company & Team",
    content: "Content for Section 1 goes here.",
  },
  {
    title: "Exchange Pairs",
    content: "Content for Section 2 goes here.",
  },
  {
    title: "Supported Coins",
    content: "Content for Section 3 goes here.",
  },
  {
    title: "Partnerships",
    content: "Content for Section 3 goes here.",
  },
  {
    title: "Legal Documents",
    content: "Content for Section 3 goes here.",
  },
];
