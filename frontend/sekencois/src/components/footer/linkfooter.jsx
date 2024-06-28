import React from 'react';

const FooterLinkSection = ({ navItems }) => {
  return (
    <div className="flex flex-col text-white py-4">
      <div className="flex flex-col space-y-2">
        {navItems.map(item => (
          <a key={item.id} href={`/${item.text}`} className="text-lg text-white hover:text-gray-400">
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterLinkSection;
