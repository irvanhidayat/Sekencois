import React from 'react';

const NavItem = ({ icon, alt }) => {
  const iconStyle = {
    fontSize: '14px', 
    fontWeight: 'extrabold',
  };
  return (
    <div className="py-4 px-4 m-2 cursor-pointer duration-300 hover:text-[#33a49d]" style={iconStyle}>
      <div className="flex items-center space-x-2">
        <div>{alt}</div>
        <div>{icon}</div>
      </div>
    </div>
  );
};

export default NavItem;