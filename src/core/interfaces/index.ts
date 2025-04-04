import { ReactNode } from "react";

export interface In_MenuItem {
  id: number;
  label: string;
  icon?: ReactNode;
  route: string;
  children?: In_MenuItem[];
  disabled?: boolean;
}
