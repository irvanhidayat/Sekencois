import React from 'react';
import Logo from '../Navbar/logo';
import Button from '../elements/button';

const Perusahaan = () => {
  return (
    <div className="max-w-xs">
      <Logo img={'./img/LogoWhite.png'} />
      <p className="mb-4 text-white">
        Belajar coding dengan kurikulum industri. Ambil sertifikasi serta kesempatan kerja di berbagai perusahaan.
      </p>
      <Button className="font-semibold rounded-xl bg-white text-[#44C6BE] px-4 py-2 self-start">
        Contact Me
      </Button>
    </div>
  );
};

export default Perusahaan;
