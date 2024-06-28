import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import Accordion from "./Accordion";

const CategoryAccordion = ({ category, questions }) => {
  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <div className="mb-2">
      <button
        onClick={() => setCategoryOpen(!categoryOpen)}
        className="flex justify-between items-center w-full focus:outline-none bg-gray-300 p-4 rounded-t-xl shadow-md"
      >
        <h2 className="font-semibold">{category}</h2>
        <div className="ml-2 transform transition-transform duration-300" style={{ transform: categoryOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          {categoryOpen ? <BsDash size={20} /> : <BsPlus size={20} />}
        </div>
      </button>
      <div
        style={{
          maxHeight: categoryOpen ? 'none' : '0',
          opacity: categoryOpen ? '1' : '0',
        }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        {categoryOpen &&
          questions.map((faq, index) => (
            <Accordion key={index} title={faq.title} answer={faq.answer} />
          ))}
      </div>
    </div>
  );
};

export default CategoryAccordion;
