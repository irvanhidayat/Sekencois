
import React, { useContext } from 'react';
import { ShopContext } from '../../../context/ShopContext'; 
import Item from '../Item/Item'; 

const NewCollections = () => {
    const { all_product } = useContext(ShopContext); // Ambil produk dari context

    // Tentukan batas waktu untuk "New Arrival"
    const today = new Date();
    const newArrivalDays = 30;
    const newArrivalDate = new Date(today.setDate(today.getDate() - newArrivalDays));

    // Filter produk berdasarkan tanggal
    const newProducts = all_product.filter(product => new Date(product.added_date) >= newArrivalDate);

    return (
        <div className="flex flex-col items-center gap-2 height-full px-16 pb-8">
            <h1 className="text-3xl font-bold text-center">KOLEKSI TERBARU</h1>
            <hr className="h-1.5 w-1/5 rounded border-0 bg-[#44C6BE] mb-8" /> 
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {newProducts.map((item, i) => 
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

export default NewCollections;