// src/components/CategoryCircle.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import Image1 from '/public/img/sepatu1.jpg';
import Image2 from '/public/img/kemeja.jpg';
import Image3 from '/public/img/sepatu1.jpg';

const categories = [
  { name: 'Women', image: Image1, link: '/women' },
  { name: 'Men', image: Image2, link: '/men' },
  { name: 'Kid', image: Image3, link: '/kid' },
  { name: 'Accessories', image: Image1, link: '/accessories' },
  { name: 'Shoes', image: Image2, link: '/shoes' },
  { name: 'Bags', image: Image3, link: '/bags' },
  { name: 'New', image: Image1, link: '/new' },
];

const CategoryCircle = () => {
  return (
    <div className="px-16 pb-12">
      <div className="flex justify-center overflow-x-auto overflow-y-hidden bg-gray-200 rounded-lg p-4">
        <div className="flex space-x-6">
          {categories.map((category, index) => (
            <Link 
              to={category.link} 
              key={index} 
              className="flex flex-col items-center focus:outline-none"
              style={{ textDecoration: 'none' }} // Menghilangkan underline pada hover
            >
              <div className="relative w-32 h-32 overflow-hidden border-4 border-gray-300 rounded-full hover:shadow-lg transform hover:scale-105 transition duration-300">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover rounded-full"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
              </div>
              <p className="mt-2 text-center text-lg font-semibold">{category.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCircle;
