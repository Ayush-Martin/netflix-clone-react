import React, { useState } from "react";
import { Accordion } from "../components";

const Accordions = ({ items }) => {
  const [currentOpen, setCurrentOpen] = useState(null);
  const handleOpen = (id) => {
    setCurrentOpen(id);
  };
  return (
    <div>
      {items.map((accordion, i) => (
        <Accordion
          text={accordion.text}
          title={accordion.title}
          isOpen={currentOpen == i}
          id={i}
          handleOpen={handleOpen}
        />
      ))}
    </div>
  );
};

export default Accordions;
