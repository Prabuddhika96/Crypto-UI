import { Routenames } from "Constants/RouteName";
import React from "react";
import { Link } from "react-router-dom";

function FooterBottomListElement({ icon }: any) {
  return (
    <>
      <li className="text-2xl hover:text-gray-600 duration-200 ease-in-out">
        <Link to={Routenames.Home} className={`flex items-center `}>
          {icon}
        </Link>
      </li>
    </>
  );
}

export default FooterBottomListElement;
