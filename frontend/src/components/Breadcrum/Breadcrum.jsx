// Breadcrum.jsx
import { FaAngleRight } from "react-icons/fa6";

const Breadcrum = (props) => {
    const { product } = props;
    return (
        <div className="flex items-center space-x-2 font-size-xs text-gray-600 transform:capitalize pt-16 px-16">
            <span>HOME</span>
            <FaAngleRight />
            <span>SHOP</span>
            <FaAngleRight />
            <span>{product.category}</span>
            <FaAngleRight />
            <span>{product.name}</span>
        </div>
    );
}

export default Breadcrum;
