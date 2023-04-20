import DesktopNavElement from "./DesktopNavElement";
import { Routenames } from "Constants/RouteName";
import DesktopNavBtn from "./DesktopNavBtn";
import { Link } from "react-router-dom";

function DeskTopNav() {
  return (
    <div className="flex justify-around py-2 w-8/12 mx-auto items-center">
      <div>
        <Link to={Routenames.Home}>SimpleSwap</Link>
      </div>
      <div>
        <ul
          className={` ml-10 text-center items-center flex text-base gap-x-8`}>
          <DesktopNavElement
            linkAddress={Routenames.HowItWorks}
            name={"How it works"}
            icon={false}
          />
          <DesktopNavElement
            linkAddress={Routenames.LoyaltyProgram}
            name={"Loyalty program"}
            icon={false}
          />
          <DesktopNavElement
            linkAddress={Routenames.Home}
            name={`Learn`}
            icon={true}
            array={subMenu}
            right={"44px"}
          />
          <DesktopNavElement
            linkAddress={Routenames.Blog}
            name={"Blog"}
            icon={false}
          />
          <DesktopNavElement
            linkAddress={Routenames.Contact}
            name={"Contact"}
            icon={false}
          />
          <DesktopNavElement
            linkAddress={Routenames.Home}
            name={"Business"}
            icon={true}
            array={subMenu}
            right={"55px"}
          />
        </ul>
      </div>
      <div className="flex justify-around gap-x-3">
        <DesktopNavBtn
          name={"Log in"}
          link={Routenames.LogIn}
          color={"#2B4A90"}
          h_color={"#405da1"}
        />
        <DesktopNavBtn
          name={"Get an account"}
          link={Routenames.Signup}
          color={"#4684ff"}
          h_color={"#004AD9"}
        />
      </div>
    </div>
  );
}

export default DeskTopNav;

// eslint-disable-next-line no-sparse-arrays
const subMenu = [
  { name: "submenu1", link: Routenames.Home },
  { name: "submenu1", link: Routenames.Home },
  ,
  { name: "submenu1", link: Routenames.Home },
];
