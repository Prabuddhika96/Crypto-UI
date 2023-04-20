import { useState } from "react";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import SubSideNav from "./SubSideNav";

function MobileNavElement({ linkAddress, name, icon, array, right }: any) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <li
        className="text-[#cecece] hover:text-[#9b9b9b] py-4 hover:duration-300 relative"
        onClick={() => setIsClicked(!isClicked)}>
        <Link
          to={linkAddress}
          className={`${
            icon === true && "flex justify-between items-center"
          } `}>
          {name}{" "}
          {icon === true && (
            <span className="ml-2">
              <HiChevronRight />
              {isClicked ? (
                <>
                  <SubSideNav visible={isClicked} setVisible={setIsClicked} />
                </>
              ) : (
                <></>
              )}
            </span>
          )}
        </Link>
      </li>
    </div>
  );
}

export default MobileNavElement;
