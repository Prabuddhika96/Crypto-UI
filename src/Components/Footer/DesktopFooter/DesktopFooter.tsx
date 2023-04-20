import React from "react";
import FooterTop from "./Top/FooterTop";
import MiddleTop from "./Middle/MiddleTop";
import MiddleMenu from "./Middle/MiddleMenu";
import FooterBottom from "./Bottom/FooterBottom";

function DesktopFooter() {
  return (
    <div className="w-full">
      <div className="border-b-[0.05px] border-solid border-[#9a9a9a44] py-8">
        <FooterTop />
      </div>
      <div className="py-3">
        <MiddleTop />
      </div>

      <div className="py-8">
        <MiddleMenu />
      </div>
      <div className="py-8 bg-[#010C22]">
        <FooterBottom />
      </div>
    </div>
  );
}

export default DesktopFooter;
