import { ReactNode, SelectHTMLAttributes } from "react";

export interface In_MenuItem {
  id: number;
  label: string;
  icon?: ReactNode;
  route: string;
  children?: In_MenuItem[];
  disabled?: boolean;
}

export interface In_TabItem {
  id: number;
  title: string;
  content: ReactNode;
  closable?: boolean;
  disabled?: boolean;
}

export interface In_TabProps {
  tabs: In_TabItem[];
  activeTab?: number;
}

export interface In_MetricDisplayProps {
  mainTitle: string;
  percent: number;
  percentType: "+" | "-";
  subPercent: number;
}
export interface In_SelectOptionProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  options: any[];
  defaultValue?: any;
  onChange: (value: any) => void;
}
