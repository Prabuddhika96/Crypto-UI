import { HiChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import DesktopNavSubNav from "./DesktopNavSubNav";

function DesktopNavElement({ linkAddress, name, icon, array, right }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <li
        className="inline text-[#cecece] p-5 hover:text-[#9b9b9b] hover:duration-300 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <Link
          to={linkAddress}
          className={`flex items-center ${
            icon === true && "hover:bg-[#2B4A90] px-5 py-2 rounded-lg"
          }`}>
          {name}{" "}
          {icon === true && (
            <span className="ml-2">
              {isHovered ? (
                <>
                  <HiChevronDown className="transform rotate-180" />
                  <DesktopNavSubNav array={array} right={right} />
                </>
              ) : (
                <HiChevronDown />
              )}
            </span>
          )}
        </Link>
      </li>
    </div>
  );
}

export default DesktopNavElement;
