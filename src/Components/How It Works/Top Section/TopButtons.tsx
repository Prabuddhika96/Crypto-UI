import React from "react";
import trustPilot from "Img/pngwing.com.png";
import play from "Img/pngwing.com (1).png";
import app from "Img/pngwing.com (1).png";
import TopBtn from "./TopBtn";

function TopButtons() {
  return (
    <div className="flex items-center justify-around w-full ">
      <TopBtn
        logo={trustPilot}
        name={"TrustPilot"}
        ratings={5}
        rate={"Excellent"}
      />
      <TopBtn logo={play} name={"Google Play"} ratings={5} rate={"5.0"} />
      <TopBtn logo={app} name={"App Store"} ratings={4} rate={"4.0"} />
    </div>
  );
}

export default TopButtons;
