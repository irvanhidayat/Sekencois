import React from 'react';
import Banner from '../components/Banner/Banner';
import Populer from '../components/Product/Populer/Populer'; // Pastikan jalur ini benar
import NewCollections from '../components/Product/NewCollections/NewCollections';
import  Footer  from '../components/footer/footer';

const Shop = () => { 
    return (
        <>
            <Banner />
            <NewCollections />
            <Footer/>
        </>
    );
}

export default Shop;
