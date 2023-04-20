import TabContentInput from "./TabContentInput";
import TabContentDropDown from "./TabContentDropDown";

function TabContentRow({ inputText, setInputText, placeHolder, disable }: any) {
  //   const [inputText, setInputText] = useState("");
  return (
    <div className="relative flex items-center justify-between w-11/12 gap-1 mx-auto my-5">
      <div className="w-9/12">
        <TabContentInput
          inputText={inputText}
          setInputText={setInputText}
          placeHolder={placeHolder}
          disable={disable}
        />
      </div>
      <div className="w-3/12 ">
        <TabContentDropDown />
      </div>
    </div>
  );
}

export default TabContentRow;
