import { useContext } from "react";
import { ShopContext } from "../../../context/ShopContext";
import { FaAngleDown } from "react-icons/fa6";
import Banner from "../../Banner/Banner";
import Footer from "../../footer/footer";
import Item from "../../Product/Item/Item"; 
import Navbar from "../../Navbar/Navbar";



const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);
    return (
        <div className="">
            <Navbar />
            <Banner />
            <div className="px-16">
            <div className="container mx-auto my-4">
                <div className="flex justify-between items-center">
                    <p className="text-lg">
                        <span className="font-bold">Showing 1-12 </span> out of {all_product.length}
                    </p>
                    <div className="p-2 md:p-3 border border-blue-500 rounded-xl flex items-center">
                        Sort by
                        <FaAngleDown className="ml-2" />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-6 mt-6">
                    {all_product.map((product, i) => {
                        if (product.category === props.category) {
                            return (
                                <Item
                                    key={i}
                                    id={product.id}
                                    name={product.name}
                                    image={product.image}
                                    new_price={product.new_price}
                                    old_price={product.old_price}
                                />
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ShopCategory;
