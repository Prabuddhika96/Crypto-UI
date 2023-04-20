import { HiChevronLeft } from "react-icons/hi";
import SubSideNavUl from "./SubSideNavUl";
import { Routenames } from "Constants/RouteName";

function SubSideNav({ visible, setVisible }: any) {
  return (
    <div
      id="mySidenav"
      className={`sub-sidenav ${visible ? "w-6/12" : "w-[0px]"}`}>
      <div className="px-8 py-5">
        <div className="">
          <p
            className="cursor-pointer text-lg gap-1 flex items-center"
            onClick={() => {
              setVisible(!visible);
            }}>
            <span className="text-xl">
              <HiChevronLeft />
            </span>{" "}
            Back
          </p>
        </div>

        <div className="mt-4">
          <SubSideNavUl array={subMenu} />
        </div>
      </div>
    </div>
  );
}

export default SubSideNav;

// eslint-disable-next-line no-sparse-arrays
const subMenu = [
  { name: "submenu1", link: Routenames.Home },
  { name: "submenu1", link: Routenames.Home },
  ,
  { name: "submenu1", link: Routenames.Home },
];
