import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ text = "signin", onClickHandle, className }) => {
  return (
    <button
      className={twMerge(
        " text-center rounded-md hover:brightness-90 ",
        className
      )}
      onClick={onClickHandle}
    >
      <p className="">{text}</p>
    </button>
  );
};

export default Button;
