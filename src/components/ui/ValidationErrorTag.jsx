import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const ValidationErrorTag = ({ error }) => {
  return (
    <>
      {error && (
        <div className="mt-2 text-[11px] text-red-600">
          <p className="">
            <IoCloseCircleOutline className="inline-flex text-sm" /> {error}
          </p>
        </div>
      )}
    </>
  );
};

export default ValidationErrorTag;
