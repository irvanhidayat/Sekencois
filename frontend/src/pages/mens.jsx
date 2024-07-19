import all_product from '../assets/all_product';
import Banner from './components/Banner/Banner';
import { RiArrowDropDownFill } from 'react-icons/ri';
import Item from '../components/Product/Item/Item';

const Mens = () => {
  return (
    <>
      <Banner />
      <div>
        <p>
          <span>Showing 1-12</span>out of 36 product
        </p>
        <div>
          Sort by <RiArrowDropDownFill />
        </div>
      </div>
          <div>{all_product.map((item) => {
              if (props.category === item.category) {
              return  <Item 
              key={i} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price} 
          />
              }
              else {
                  return null
              }
          })}
          </div>
    </>
  );
};
export default Mens;
