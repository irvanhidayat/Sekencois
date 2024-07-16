import React from 'react';
import Banner from './Banner';
import contentData from './contentData';

const TermsConditions = () => {
  const { title, backgroundImage, sections } = contentData.termsConditions;

  return (
    <div>
      <Banner backgroundImage={backgroundImage} title={title} />
      <div className="p-8 space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-white shadow-md rounded-sm p-6 transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-2 border-b-2 border-gray-200 pb-2">{section.heading}</h2>
            <p className="text-gray-700 leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsConditions;
