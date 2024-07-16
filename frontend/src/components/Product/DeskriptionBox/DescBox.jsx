import { useState } from 'react';

const DescriptionBox = ({ product }) => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="px-16 py-8">
      <div className="flex flex-col">
        <div className="flex">
          <button className={`flex items-center justify-center px-4 py-2 border ${activeTab === 'description' ? 'bg-gray-100 border-gray-300' : 'bg-white'}`} onClick={() => setActiveTab('description')}>
            Deskripsi
          </button>
          <button className={`flex items-center justify-center px-4 py-2 border ${activeTab === 'reviews' ? 'bg-gray-100 border-gray-300' : 'bg-white'}`} onClick={() => setActiveTab('reviews')}>
            Penilaian
          </button>
        </div>
        <div className="flex flex-col gap-4 border bg-gray-100 border-gray-300 p-4  min-h-[200px]">
          {activeTab === 'description' ? (
            <div>
              <p>{product.description}</p>
            </div>
          ) : (
            <div>Coming soon</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
