import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { twMerge } from "tailwind-merge";

const DropDown = ({
  children,
  options = [
    { value: "english", text: "English" },
    { value: "hindi", text: "Hindi" },
  ],
  className,
}) => {
  return (
    <div
      className={twMerge(
        "inline-flex items-center gap-2 px-2 text-white bg-[#0f0f0f] border-[1px]  text-[13px] py-1 rounded-sm",
        className
      )}
    >
      <div>{children}</div>
      <select className="block bg-transparent outline-none appearance-none">
        {options.map((opt) => {
          return (
            <option className="text-black " value={opt.value}>
              {opt.text}
            </option>
          );
        })}
      </select>
      <div className="">
        <MdArrowDropDown />
      </div>
    </div>
  );
};

export default DropDown;
