import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ backgroundImage, title }) => {
  return (
    <div className="relative h-64 w-full bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
      </div>
    </div>
  );
};

Banner.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Banner;
