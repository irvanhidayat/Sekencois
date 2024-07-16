import React from 'react';
import Banner from './Banner';
import contentData from './contentData';

const AboutUs = () => {
  const { title, backgroundImage, sections } = contentData.aboutUs;

  return (
    <div>
      <Banner backgroundImage={backgroundImage} title={title} />
      <div className="p-8 space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="space-y-2">
            <h2 className="text-2xl font-semibold">{section.heading}</h2>
            <p className="text-gray-700">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
