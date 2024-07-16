import React from 'react';

const Button = ({ children, className, onClick, value, title }) => {
  const content = children ? children : title;

  return (
    <button className={className} onClick={onClick} value={value}>
      {content}
    </button>
  );
};

export default Button;
