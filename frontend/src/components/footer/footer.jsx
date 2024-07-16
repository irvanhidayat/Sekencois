import React from 'react';
import FooterCategory from './categoryFooter';
import Perusahaan from './perusahaan';

const Footer = () => {
  const categories = [
    {
      title: 'Sekencois',
      items: [
        { id: 1, text: 'Login', link:"login" },
        { id: 2, text: 'Home', link:"/" },
        { id: 3, text: 'Belanja', link: "shop" },
        { id: 4, text: 'Pria', link: "men" },
        { id: 5, text: 'Wanita', link: "women" },
        { id: 6, text: 'Anak', link: "kid" },
      ]
    },
    {
      title: 'Bantuan',
      items: [
        { id: 1, text: 'FaQ', link:"faq" },
        { id: 2, text: 'Kontak', link:"#" },
      ]
    },
    {
      title: 'Lainnya',
      items: [
        { id: 1, text: 'Syarat Ketentuan', link:"syaratketentuan" },
        { id: 2, text: 'Kebijakan Pengguna', link:"kebijakanpengguna" },
        { id: 3, text: 'Tentang Kami', link:"tentangkami" },
      ]
    }
  ];

  return (
    <div className="bg-[#44C6BE] flex justify-between items-start px-16 py-6 space-x-8">
      <div className="flex-1">
        <Perusahaan />
      </div>
      <div className="flex space-x-8 py-8">
        {categories.map(category => (
          <FooterCategory key={category.title} title={category.title} items={category.items} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
