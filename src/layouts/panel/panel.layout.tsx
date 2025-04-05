import PanelMenuLayout from "./panelMenu.layout";
import profileImages from "./../../assets/images/pexels-minan1398-926818.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Outlet, useLocation } from "react-router-dom";
import { menuObject } from "./panelMenu.object";

function PanelLayout() {
  return (
    <div className="flex h-svh w-full flex-wrap">
      <div className="md:w-1/5">
        <PanelMenuLayout />
      </div>
      <div className="bg-secodaryBg h-full w-full md:w-4/5">
        <ContentNav />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function ContentNav() {
  const { pathname } = useLocation();
  return (
    <>
      <div className="outline-lines hidden w-full content-center items-center justify-between bg-black px-6 outline-2 outline-solid md:flex md:h-50">
        <h2 className="capitalize">
          {menuObject.find((items) => items.route === pathname)?.label}
        </h2>
        <div className="flex h-full">
          <div className="flex h-full w-20 items-center justify-center">
            Activity
          </div>
          <div className="border-lines flex h-full w-20 items-center justify-center border-2 border-r border-l">
            Log out
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-30 flex h-20 w-full content-center items-center justify-between bg-black px-6 md:hidden">
        <img
          src={profileImages}
          className="size-[30px] rounded-full"
          alt="profiles"
        />
        <div className="size-[30px] rounded-full bg-white"></div>
        <div>
          <BsThreeDotsVertical />
        </div>
      </div>
    </>
  );
}

export default PanelLayout;
