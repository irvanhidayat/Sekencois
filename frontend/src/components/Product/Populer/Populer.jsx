import React from 'react';
import Item from '../Item/Item'; 
import all_product from '../../../assets/all_product'; 

const Populer = () => {
  // Mengambil produk populer.
  const populerProducts = all_product.slice(0, 12);

  return (
    <div className="flex flex-col items-center gap-2 height-full px-16 pb-8">
      <h2 className="text-3xl font-bold text-center">Produk Populer</h2>
      <hr className="h-1.5 w-1/5 rounded border-0 bg-[#44C6BE] mb-8" /> 
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {populerProducts.map((product) => (
          <div className="flex flex-col min-h-full" key={product.id}>
            <Item
              id={product.id}
              name={product.name}
              new_price={product.new_price}
              old_price={product.old_price}
              image={product.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Populer;
