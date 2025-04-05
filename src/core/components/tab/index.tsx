import { useState } from "react";
import { In_TabProps } from "../../interfaces";
import { Link } from "react-router-dom";
import clsx from "clsx";

function Tabs({ tabs, activeTab }: In_TabProps) {
  const [tab, setTab] = useState(activeTab || 1);

  function handleTab(tabId: number) {
    setTab(tabId);
  }

  return (
    <div className="w-full">
      <TabsNav tabs={tabs} activeTab={tab} handleTab={handleTab} />
      <div className="p-6">{tabs.find((item) => item.id === tab)?.content}</div>
    </div>
  );
}

function TabsNav({
  tabs,
  activeTab,
  handleTab,
}: In_TabProps & { handleTab: (tabId: number) => void }) {
  return (
    <div className="border-lines sticky top-20 z-30 flex w-full content-center items-center justify-center border-b-2 border-solid bg-black md:static md:justify-between">
      <div className="flex content-center items-center gap-2.5 md:gap-0">
        {tabs.map((t) => {
          return (
            <div
              key={t.id}
              className={clsx({
                "md:border-lines relative flex h-50 cursor-pointer content-center items-center justify-center px-2 text-sm md:static md:border-r-2 md:border-solid md:px-6 md:text-base":
                  true,
                "text-lines": activeTab !== t.id,
                "before:absolute before:right-0 before:bottom-0 before:left-0 before:h-1 before:rounded before:bg-white":
                  activeTab === t.id,
                "text-white": activeTab === t.id,
              })}
              onClick={() => handleTab(t.id)}
            >
              {t.title}
            </div>
          );
        })}
      </div>
      <div className="border-lines hidden h-50 w-28 content-center items-center justify-center border-l-2 border-solid md:flex">
        <Link to={"#"}> More</Link>
      </div>
    </div>
  );
}
export default Tabs;
