import React from 'react';

const Logo = (props) => {
  const { img } = props;
  return (
    <div className="flex items-center h-16">
      <img src={img} alt="Logo" className="h-full" />
    </div>
  );
};

export default Logo;