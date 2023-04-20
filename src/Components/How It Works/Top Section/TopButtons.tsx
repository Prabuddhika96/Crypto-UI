import React from "react";
import trustPilot from "Img/pngwing.com.png";
import play from "Img/pngwing.com (1).png";
import app from "Img/app store 2.png";
import TopBtn from "./TopBtn";

function TopButtons() {
  return (
    <div className="items-center justify-around w-full md:flex max-md:block max-md:justify-start">
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
