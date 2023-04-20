import React from "react";
import MIddleGridItem from "./MIddleGridItem";
import CompanyAndTeam from "Constants/CompanyAndTeam";

function MiddleMenu() {
  return (
    <div className="w-8/12 mx-auto px-5">
      <div className="flex justify-between">
        <MIddleGridItem name={"Company & Team"} data={CompanyAndTeam} />
        <MIddleGridItem name={"Exchange Pairs"} data={CompanyAndTeam} />
        <MIddleGridItem name={"Supported Coins"} data={CompanyAndTeam} />
        <MIddleGridItem name={"Partnerships"} data={CompanyAndTeam} />
        <MIddleGridItem name={"Legal Documents"} data={CompanyAndTeam} />
      </div>
    </div>
  );
}

export default MiddleMenu;
