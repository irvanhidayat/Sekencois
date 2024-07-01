import React, { useState } from 'react';
import { RiStarSFill, RiStarSLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import RelatedProduct from './Related/Related';

const ProductDisplay = (props) => {
  const { product } = props;
  const [startIndex, setStartIndex] = useState(0);

  const handlePrevClick = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    if (product.images) {
      setStartIndex((prevIndex) => Math.min(prevIndex + 1, product.images.length - 4));
    }
  };

  return (
    <div className="px-16">
      <div className="flex flex-col lg:flex-row bg-gray-100 p-6  ">
        <div className="lg:w-1/3 flex flex-col items-center">
          <div className="relative mb-6">
            <img className="w-full lg:w-96 h-auto object-cover rounded-xl border border-gray-300" src={product.image} alt={product.name} />
            {product.images && product.images.length > 0 && (
              <>
                {product.images.length > 4 && <RiArrowLeftSLine className="text-3xl cursor-pointer absolute left-0 bottom-7 transform -translate-y-1/5 bg-white bg-opacity-75 rounded-full p-1" onClick={handlePrevClick} />}
                <div className="flex space-x-1 overflow-x-hidden mt-4">
                  {product.images.slice(startIndex, startIndex + 4).map((img, index) => (
                    <img key={index} className="w-24 h-24 object-cover rounded-lg border border-gray-300" src={img} alt={`Product ${index + 1}`} />
                  ))}
                </div>
                {product.images.length > 4 && <RiArrowRightSLine className="text-3xl cursor-pointer absolute right-0 bottom-7 transform -translate-y-1/5 bg-white bg-opacity-75 rounded-full p-1" onClick={handleNextClick} />}
              </>
            )}
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-6">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center mb-4">
            <RiStarSFill className="text-yellow-500" />
            <RiStarSFill className="text-yellow-500" />
            <RiStarSFill className="text-yellow-500" />
            <RiStarSFill className="text-yellow-500" />
            <RiStarSLine className="text-yellow-500" />
            <p className="ml-2 text-gray-600">(5.0)</p>
          </div>
          <div className="flex items-baseline mb-8">
            <div className="text-gray-500 line-through mr-2">{product.old_price}</div>
            <div className="text-3xl font-bold text-red-600">{product.new_price}</div>
          </div>

          <div className="mb-4">
            <h1 className="text-lg font-semibold mb-2">Ukuran</h1>
            <div className="flex space-x-4 mb-4">
              {product.sizes.map((size, index) => (
                <div key={index} className="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200">
                  {size}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h1 className="text-lg font-semibold mb-2">Warna</h1>
            <div className="flex space-x-4 mb-4">
              {product.colors.map((color, index) => (
                <div key={index} className="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200">
                  {color}
                </div>
              ))}
            </div>
            <button className="px-4 bg-[#44C6BE] text-white py-3 rounded-lg hover:bg-[#33a49d] transition duration-300">Masukkan Keranjang</button>
            <button className="px-4 border border-[#44C6BE] py-3 rounded-lg hover:bg-white transition duration-300 ms-2">Beli Sekarang</button>
          </div>

          <p className="text-gray-700">
            <span className="font-semibold">Category:</span> {product.category}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Tags:</span> {product.tags.join(', ')}
          </p>
        </div>
      </div>

    </div>
  );
};

export default ProductDisplay;
