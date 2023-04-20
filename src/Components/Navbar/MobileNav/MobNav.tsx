import { Routenames } from "Constants/RouteName";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import SideNav from "./SideNav";

function MobNav() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="flex justify-between px-12 py-6 w-full mx-auto items-center">
      <div>
        <Link to={Routenames.Home}>SimpleSwap</Link>
      </div>
      <div
        className="text-3xl"
        onClick={() => {
          setVisible(!visible);
        }}>
        <HiOutlineMenu />
      </div>

      <SideNav visible={visible} setVisible={setVisible} />
    </div>
  );
}

export default MobNav;
