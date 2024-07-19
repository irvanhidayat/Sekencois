import React, { useContext } from 'react';
import { ShopContext } from '../../../context/ShopContext'; 
import Item from '../Item/Item';

const RelatedProduct = ({ currentProduct }) => {
    const { all_product } = useContext(ShopContext);

    // Jika currentProduct tidak ada atau tidak memiliki kategori, jangan tampilkan produk terkait
    if (!currentProduct || !currentProduct.category) {
        return null;
    }

    // Filter produk berdasarkan kategori yang sama dengan produk yang sedang dibuka
    const relatedProducts = all_product.filter(product => 
        product.category === currentProduct.category && product.id !== currentProduct.id
    );

    return (
        <div className="flex flex-col items-center gap-2 height-full px-16 pb-8">
            <h1 className="text-3xl font-bold text-center">Produk Terkait</h1>
            <hr className="h-1.5 w-1/5 rounded border-0 bg-[#44C6BE] mb-8" /> 
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedProducts.map((item, i) => 
                    <Item 
                        key={i} 
                        id={item.id} 
                        name={item.name} 
                        image={item.image} 
                        new_price={item.new_price} 
                        old_price={item.old_price} 
                    />
                )}
            </div>
        </div>
    );
};

export default RelatedProduct;
