import { useState } from "react";
import TabContentRow from "./TabComponents/TabContentRow";
import TableContentBtn from "./TabComponents/TableContentBtn";

function TabContent() {
  const [inputText1, setInputText1] = useState("0.1");
  const [inputText2, setInputText2] = useState("0.1");
  return (
    <div className="w-11/12 mx-auto">
      <TabContentRow
        inputText={inputText1}
        setInputText={setInputText1}
        placeHolder={"You send"}
      />
      <TabContentRow
        inputText={Number(inputText1) * 10}
        setInputText={setInputText2}
        placeHolder={"You Get"}
        disable={true}
      />

      <TableContentBtn />
    </div>
  );
}

export default TabContent;
