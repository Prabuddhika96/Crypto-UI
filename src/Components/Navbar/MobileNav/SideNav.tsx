import { AiOutlineClose } from "react-icons/ai";
import MobNavUl from "./MobNavUl";

function SideNav({ visible, setVisible }: any) {
  return (
    <div id="mySidenav" className={`sidenav ${visible ? "w-6/12" : "w-[0px]"}`}>
      <div className="px-8 py-5">
        <div className="flex justify-between">
          <p>flags</p>
          <p
            className="cursor-pointer text-2xl"
            onClick={() => {
              setVisible(!visible);
            }}>
            <AiOutlineClose />
          </p>
        </div>

        <div className="mt-4">
          <MobNavUl />
        </div>
      </div>
    </div>
  );
}

export default SideNav;
