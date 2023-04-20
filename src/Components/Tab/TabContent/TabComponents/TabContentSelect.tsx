import Coins from "Constants/Coins";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import logo from "Img/btc.png";

function TabContentSelect({ visible, setvisible, placeHolder }: any) {
  const [inputText, setInputText] = useState("");
  const [filterdData, setFilteredData] = useState<any>(Coins);
  const [placeHolderVisible, setplaceHolderVisible] = useState<boolean>(false);

  const handleInputChange = (event: any) => {
    const text = event.target.value;
    if (text === "") {
      setplaceHolderVisible(false);
    } else {
      setplaceHolderVisible(true);
    }
    setInputText(text);

    // filter suggestions based on input text
    const filteredSuggestions = Coins.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filteredSuggestions);
  };
  return (
    <div className="relative w-full h-16">
      <div className="relative flex items-center w-full">
        <span
          className={`absolute left-2 text-[#999] px-4 ${
            placeHolderVisible && "hidden"
          }`}>
          {placeHolder}
        </span>
        <input
          type="text"
          className="w-full h-16 border-[1px] border-blue-400 px-4 rounded-lg border-solid"
          value={inputText}
          onChange={handleInputChange}
        />
      </div>

      <div className="px-2 overflow-scroll bg-white max-h-56">
        {filterdData.map((c: any, i: number) => (
          <div className="flex justify-around my-1" key={i}>
            <div className="grid items-center grid-cols-2">
              <img src={logo} width={"20px"} height={"20px"} alt="" />
              <p className="py-2">{c.name}</p>
            </div>
            <p className="py-2">{c.fullName}</p>
          </div>
        ))}
      </div>

      <div
        className="absolute z-10 text-3xl right-4 top-4"
        onClick={() => setvisible(!visible)}>
        <AiOutlineClose />
      </div>
    </div>
  );
}

export default TabContentSelect;
