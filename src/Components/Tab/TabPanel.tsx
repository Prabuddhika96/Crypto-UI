import { useState } from "react";
import TabContent from "./TabContent/TabContent";

type Tab = {
  id: number;
  label: string;
  content: React.ReactNode;
};

const tabs: Tab[] = [
  { id: 1, label: "Crypto Exchange", content: "Content for Tab 1" },
  { id: 2, label: "Buy/Sell Crypto", content: "Content for Tab 2" },
];

const TabPanel = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <div className="w-5/12 max-md:w-11/12 mx-auto min-h-[200px] pb-8 bg-white rounded-3xl shadow-2xl">
      <ul className="flex h-16 gradient-bg rounded-t-3xl ">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`${activeTab === 1 ? "" : ""}  w-6/12 py-4 ${
              activeTab === tab.id
                ? `text-[#151444] !bg-white ${
                    activeTab === 1
                      ? "rounded-tl-3xl rounded-br-3xl"
                      : "rounded-tr-3xl rounded-bl-3xl"
                  } `
                : `${
                    activeTab === 1
                      ? "rounded-tl-3xl rounded-tr-3xl"
                      : "rounded-tr-3xl rounded-tl-3xl"
                  } bg-[#cad0d7]`
            } `}
            onClick={() => handleTabClick(tab.id)}>
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="mt-4 text-black">
        {tabs.map((tab) =>
          activeTab === tab.id ? (
            <div key={tab.id}>
              <>
                <TabContent />
              </>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default TabPanel;
