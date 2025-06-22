import { useState } from "react";
import { CircleArrowLeft } from "lucide-react";

export const Tabs = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`absolute xl:hidden m-2 bg-slate-700 rounded-full transform transition-transform duration-800 ${
          isOpen ? "rotate-0" : "rotate-180"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {<CircleArrowLeft />}
      </div>
      <div
        className={`mt-0 xl:w-full gap-4 xl:bg-slate-100/30 bg-slate-800 justify-center
          h-fit shadow rounded flex-col xl:flex-row 
          transition-all transform duration-800 ease-in-out
          xl:translate-x-0 xl:opacity-100 xl:static 
          absolute top-14 left-2 flex
           ${
             !isOpen
               ? "-translate-x-full opacity-0"
               : "translate-x-0 opacity-100"
           }`}
      >
        {tabs?.map((tab, index) => (
          <div
            key={index}
            className={`text-md font-bold flex gap-2 cursor-pointer p-2 px-3 ${
              selectedTab === index
                ? "bg-amber-50/10 border-b-slate-800 border-b-3"
                : "hover:bg-slate-50/10"
            }`}
            onClick={() => setSelectedTab(index)}
          >
            {tab.icon(selectedTab === index ? "white" : "text-slate-400")}
            <p
              className={`${
                selectedTab === index ? "white" : "text-slate-400"
              } hidden xl:block`}
            >
              {tab.label}
            </p>
          </div>
        ))}
      </div>
      <div className="shadow xl:w-full bg-slate-100/30 flex-1 p-4 rounded overflow-scroll scrollbar-hide">
        {tabs[selectedTab]?.component()}
      </div>
    </>
  );
};
