import React, { useState, useEffect } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import carousel1 from '/src/assets/carousel1.jpg'
import carousel2 from '/src/assets/carousel2.jpg'
import carousel3 from '/src/assets/carousel3.png'

function Banner() {
  const slides = [
    { url: carousel1 },
    { url: carousel2 },
    { url: carousel3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='max-w-[1200px] h-[550px]  w-full m-auto py-16 px-4 mt-2 relative group'>
      <div className='relative w-full h-full'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>
        <div className='absolute bottom-4 left-0 right-0 flex justify-center items-center'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer mx-1 ${currentIndex === slideIndex ? 'text-white' : 'text-[#44C6BE]'}`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
