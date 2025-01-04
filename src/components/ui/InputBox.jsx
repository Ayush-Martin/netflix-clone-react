import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const InputBox = ({
  label,
  inputVal,
  inputChangeHandler,
  type,
  className,
  error,
}) => {
  const [isActive, setIsActive] = useState(false);
  const handleFocus = () => setIsActive(true);
  const handleBlur = () => !inputVal && setIsActive(false);
  return (
    <div
      className={twMerge(
        "relative h-11 px-4 rounded-sm border",
        error ? "border-red-500" : "border-gray-200",
        className
      )}
    >
      <input
        type={type}
        onChange={inputChangeHandler}
        className="w-full h-full bg-transparent border-none outline-none text-s"
        value={inputVal}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      <div
        className={twMerge(
          "absolute top-0 text-gray-400 pointer-events-none transition-all duration-300",
          isActive || inputVal ? "text-[8px] pt-[3px]" : "text-[13px] pt-[10px]"
        )}
      >
        <p className="">{label}</p>
      </div>
    </div>
  );
};

export default InputBox;
