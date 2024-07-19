import React from 'react';
import FooterLinkSection from './linkfooter';

const FooterCategory = ({ title, items }) => {
  return (
    <div className="max-w-xs">
      <h2 className="font-bold text-white">{title}</h2>
      <FooterLinkSection navItems={items} />
    </div>
  );
};

export default FooterCategory;
