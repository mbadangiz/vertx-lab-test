import React from "react";
import { In_SelectOptionProps } from "../../interfaces";

const SelectOption: React.FC<In_SelectOptionProps> = ({
  options,
  defaultValue,
  onChange,
  className,
  ...restProps
}) => {
  return (
    <select
      className={`rounded-4xl border-2 border-solid border-white bg-inherit px-6 py-2 ${className}`}
      value={defaultValue}
      onChange={(e) => onChange(e.target.value)}
      {...restProps}
    >
      {options.map((option) => (
        <option key={option} value={option} className="bg-black">
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectOption;
