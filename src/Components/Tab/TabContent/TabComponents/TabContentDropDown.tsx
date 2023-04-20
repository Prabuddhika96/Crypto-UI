import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import logo from "Img/btc.png";
import TabContentSelect from "./TabContentSelect";

function TabContentDropDown() {
  const [visible, setvisible] = useState<boolean>(false);
  return (
    <>
      <div
        className="flex items-center justify-between w-full h-16 px-5 bg-gray-300 rounded-r-lg"
        onClick={() => setvisible(!visible)}>
        <div className="flex items-center justify-between gap-2">
          <img src={logo} width={"25px"} alt="" />
          <p>BTC</p>
        </div>
        <HiChevronDown />
      </div>
      {visible && (
        <div className="absolute top-0 left-0 z-10 w-full h-16">
          <TabContentSelect
            visible={visible}
            setvisible={setvisible}
            placeHolder={"Type a cryptocurrency or ticker"}
          />
        </div>
      )}
    </>
  );
}

export default TabContentDropDown;
