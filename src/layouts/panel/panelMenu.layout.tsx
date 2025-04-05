import profileImages from "./../../assets/images/pexels-minan1398-926818.jpg";
import { FaPlus } from "react-icons/fa";
import clsx from "clsx";
import { menuObject } from "./panelMenu.object";
import { Link, useLocation } from "react-router-dom";

export default function PanelMenuLayout() {
  return (
    <div className="flex h-full w-full flex-wrap">
      <MenuAbove />
      <MenuLeft />
      <MenuRight />
    </div>
  );
}

function MenuAbove() {
  return (
    <div className="border-r-lines hidden h-50 w-full border-r-2 border-solid md:flex">
      <div className="flex h-full w-50 content-center items-center justify-center">
        <div className="size-[30px] rounded-full bg-white"></div>
      </div>
      <h2 className="flex h-full w-[calc(100%-50px)] content-center items-center px-6 text-lg font-bold">
        Vertxlabs, Inc
      </h2>
    </div>
  );
}

function MenuLeft() {
  return (
    <div className="border-lines hidden h-[calc(100%-50px)] w-50 flex-col justify-between border-2 border-solid md:flex">
      <div className="border-b-lines flex h-50 w-full content-center items-center justify-center border-b-2 border-solid">
        <img
          src={profileImages}
          className="size-[30px] rounded-full"
          alt="profiles"
        />
      </div>
      <div className="border-t-lines flex h-50 w-full content-center items-center justify-center border-t-2 border-solid">
        <FaPlus size={18} />
      </div>
    </div>
  );
}

function MenuRight() {
  const { pathname } = useLocation();

  const itemsStyle = (route: string) =>
    clsx({
      "text-lines flex flex-col content-center items-center justify-center gap-2 md:content-start md:items-start md:justify-start text-[12px] md:text-base":
        true,
      "text-white": pathname === route,
    });

  return (
    <div className="border-lines fixed bottom-0 w-full border-2 border-solid border-l-transparent bg-black md:static md:h-[calc(100%-50px)] md:w-[calc(100%-50px)] md:bg-inherit md:px-6 md:py-5">
      <ul className="flex w-full content-center items-center justify-center gap-10 py-3 md:block md:space-y-6 md:p-0">
        {menuObject.map((items) => {
          const { id, label, route, icon } = items;
          return (
            <Link to={route} className="block" key={id}>
              <li className={itemsStyle(route)}>
                {icon && <div className="!text-2xl md:hidden">{icon}</div>}
                <p>{label}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
