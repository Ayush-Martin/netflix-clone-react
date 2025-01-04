import React from "react";
import background from "../../assets/background.jpg";
import { twMerge } from "tailwind-merge";

const BackgroundImage = ({ className }) => {
  return (
    <img
      src={background}
      alt=""
      className={twMerge(
        "w-full h-full object-cover filter brightness-50 ",
        className
      )}
    />
  );
};

export default BackgroundImage;
