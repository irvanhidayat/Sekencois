import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import Breadcrum from "../../components/Breadcrum/Breadcrum";
import ProductDisplay from "./ProductDisplay";
import Navbar from "../../components/Navbar/Navbar";

import Footer from '../../components/footer/footer';
import DescriptionBox from "./DeskriptionBox/DescBox";
import RelatedProduct from "./Related/Related";
const Product = (props) => { 
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));
    return (
        <div>
            <Navbar/>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox product={product} />
            <RelatedProduct currentProduct={product} />
            <Footer/>
        </div>
    )
}
export default Product