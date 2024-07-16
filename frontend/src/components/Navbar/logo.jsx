import React from 'react';
import logoImg from '../../assets/Logo.png';

const Logo = () => {
  return (
    <div className="flex items-center h-16">
      <img src={logoImg} alt="Logo" className="h-full" />
    </div>
  );
};

export default Logo;