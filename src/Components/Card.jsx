import React, { useContext } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
// import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { CartContext } from '../Screens/CartContext';

const Card = (props) => {
  const { id, image, description, price, product } = props; // Ensure 'product' is passed down
  const { addToCart } = useContext(CartContext);


  return (
    <div className='w-[300px]'>
      <div className='relative flex flex-col gap-1 shadow-black'>
        <div style={{ width: "300px", height: "400px", backgroundImage: `url(${image})`, backgroundPosition: "center", backgroundSize: "cover", backgroundColor: "black" }}></div>
        <span>{description}</span>
        <div className='flex flex-row justify-between'>
          <span>{price}$</span>
          <button className='bg-yellow-500 rounded-full' onClick={() => addToCart(product)}>
            <MdOutlineShoppingCart size='30' color='white' />
          </button>
        </div>
        <div>
          <Link to={`/product/${id}`} className='w-full'>
            <button className='bg-black text-white p-2 w-full mt-2'>
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
