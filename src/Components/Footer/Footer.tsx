import React from "react";
import MobFooter from "./MobFooter/MobFooter";
import DesktopFooter from "./DesktopFooter/DesktopFooter";

function Footer() {
  return (
    <div className="bg-[#010E27] border-t-[0.05px] border-solid border-[#9a9a9a44]  text-white">
      <div className="md:hidden ">
        <MobFooter />
        {/* <DesktopFooter /> */}
      </div>
      <div className="max-md:hidden">
        <DesktopFooter />
      </div>
    </div>
  );
}

export default Footer;
