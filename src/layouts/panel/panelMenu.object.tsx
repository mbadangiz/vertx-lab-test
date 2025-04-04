import { AiOutlineBell } from "react-icons/ai";
import { FaGlobeAsia } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { TbTopologyStar3 } from "react-icons/tb";
import { In_MenuItem } from "../../core/interfaces";
export const menuObject: In_MenuItem[] = [
  {
    id: 1,
    label: "Profile",
    icon: <IoPersonOutline />,
    route: "/",
  },
  {
    id: 2,
    label: "Analytics",
    icon: <LuChartNoAxesCombined />,
    route: "/analytics",
  },
  { id: 3, label: "Connect", icon: <FaGlobeAsia />, route: "/connect" },
  { id: 4, label: "Activity", icon: <AiOutlineBell />, route: "/activity" },
  { id: 5, label: "Dealroom", icon: <TbTopologyStar3 />, route: "/dealroom" },
];
