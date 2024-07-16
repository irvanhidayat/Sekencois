import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
    const { image, name, new_price, old_price, id} = props;

    return (
        <div className="relative overflow-hidden transition-transform duration-300 transform hover:scale-105 border p-5">
            <Link to={ `/product/${id}`}><img src={image} alt={name} className="w-full h-auto" /></Link>
             <p className="text-base font-medium mt-2">{name}</p>
            <div className="flex gap-4 mt-2">
                <div className="text-red-500 font-semibold">
                    {new_price}
                </div>
                <div className="text-gray-400 line-through">
                    {old_price}
                </div>
            </div>
        </div>
    );
};

export default Item;
