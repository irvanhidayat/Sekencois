import React from 'react';
import FooterCategory from './categoryFooter';
import Perusahaan from './perusahaan';

const Footer = () => {
  const categories = [
    {
      title: 'Bantuan',
      items: [
        { id: 1, text: 'Daftar' },
        { id: 2, text: 'Product' },
        { id: 3, text: 'Bantuan' },
        { id: 4, text: 'Daftar' },
        { id: 5, text: 'Product' },
        { id: 6, text: 'Bantuan' },
      ]
    },
    {
      title: 'Layanan',
      items: [
        { id: 1, text: 'Daftar' },
        { id: 2, text: 'Product' },
        { id: 3, text: 'Bantuan' },
        { id: 4, text: 'Daftar' },
      ]
    },
    {
      title: 'Navigasi',
      items: [
        { id: 1, text: 'Daftar' },
        { id: 2, text: 'Product' },
        { id: 3, text: 'Bantuan' },
      ]
    }
  ];

  return (
    <div className="bg-[#44C6BE] flex justify-between items-start px-12 py-6 space-x-8">
      <div className="flex-1">
        <Perusahaan />
      </div>
      <div className="flex space-x-8">
        {categories.map(category => (
          <FooterCategory key={category.title} title={category.title} items={category.items} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
