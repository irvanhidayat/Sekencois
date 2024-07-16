import React, { useState, useRef } from "react";
import { BsPlus, BsDash } from "react-icons/bs";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="">
      <div className="border border-gray-300 bg-white p-4 shadow-sm">
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="flex justify-between items-center w-full focus:outline-none"
        >
          <span className="text-base">{title}</span>
          <div className="ml-2 transform transition-transform duration-300" style={{ transform: accordionOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            {accordionOpen ? <BsDash size={16} /> : <BsPlus size={16} />}
          </div>
        </button>
        <div
          ref={contentRef}
          style={{
            maxHeight: accordionOpen ? `${contentRef.current.scrollHeight}px` : '0',
            opacity: accordionOpen ? '1' : '0',
          }}
          className="overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm text-justify pr-8"
        >
          <div className="mt-1">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
