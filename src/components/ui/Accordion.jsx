import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { twMerge } from "tailwind-merge";

const Accordion = ({ title, text, handleOpen, isOpen, id }) => {
  return (
    <div className="w-full mt-1">
      <btn
        onClick={() => handleOpen(isOpen ? null : id)}
        className="flex py-4 items-center justify-between w-full text-xl font-normal bg-[#2d2d2d] px-5 cursor-pointer hover:brightness-125"
      >
        <h1 className="flex-grow">{title}</h1>
        <h1 className="text-4xl">{isOpen ? <RxCross2 /> : <FaPlus />}</h1>
      </btn>
      <div
        className={twMerge(
          "transition-all duration-300 ease-in-out transform",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        )}
      >
        {isOpen && (
          <div className="mt-[3px] py-4 bg-[#2d2d2d] px-5 text-lg font-semibold">
            <p dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
