import React, { useState } from "react";
import MIddleGridItem from "../DesktopFooter/Middle/MIddleGridItem";
import CompanyAndTeam from "Constants/CompanyAndTeam";
import { HiChevronDown } from "react-icons/hi";

function Accordian({ sections }: any) {
  const [activeIndex, setActiveIndex] = useState(null);

  function toggleSection(index: any) {
    setActiveIndex(activeIndex === index ? null : index);
  }
  return (
    <div className="accordion w-11/12 mx-auto">
      {sections.map((section: any, index: any) => (
        <div
          key={index}
          className={`accordion-section duration-200 ease-in-out bg-transparent text-[#979ba0] cursor-pointer px-2 py-3 ${
            activeIndex === index ? "active" : ""
          }`}>
          <div
            className="border-b-[0.5px] border-solid border-[#9a9a9a44] py-3 px-2 flex justify-between"
            onClick={() => toggleSection(index)}>
            <p>{section.title}</p>
            {activeIndex === index ? (
              <>
                <HiChevronDown className="transform rotate-180" />
              </>
            ) : (
              <HiChevronDown />
            )}
          </div>
          <div className="accordion-content hidden p-5">
            <MIddleGridItem name={"Company & Team"} data={CompanyAndTeam} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordian;
