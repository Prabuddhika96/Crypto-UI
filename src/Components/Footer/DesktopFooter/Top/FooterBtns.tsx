import React from "react";
import { BsApple, BsAndroid2 } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import DownloadBtn from "./DownloadBtn";

function FooterBtns() {
  return (
    <div className="flex justify-between gap-3 max-md:block max-md:order-2 max-md:w-full">
      <DownloadBtn
        logo={<BsApple />}
        smallText={"Download on the"}
        bigText={"App Store"}
      />
      <DownloadBtn
        logo={<FaGooglePlay />}
        smallText={"GET IT ON"}
        bigText={"Play Store"}
      />
      <DownloadBtn
        logo={<BsAndroid2 />}
        smallText={"Download"}
        bigText={"APK"}
      />
    </div>
  );
}

export default FooterBtns;
