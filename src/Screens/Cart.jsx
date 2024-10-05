import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [counts, setCounts] = useState(cart.map(() => 1));
  const [total, setTotal] = useState(0);

  const increase = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  const decrease = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 1) {
      newCounts[index] -= 1;
    }
    setCounts(newCounts);
  };

  useEffect(() => {
    const subtotal = cart.reduce((acc, product, index) => {
      return acc + product.price * counts[index];
    }, 0);
    setTotal(subtotal);
  }, [counts, cart]);

  return (
    <div>
      <div className='text-center mt-5'><h1>Shopping Cart</h1></div>
      {cart.length === 0 ? (
        <div className='text-center'><h2>Your cart is empty</h2></div>
      ) : (
        <>
          <div className='flex flex-row items-center justify-around w11/12 p-2 mt-4'>
            <div className='w-[40px] ml-7'><h3><b>Product</b></h3></div>
            <div className='w-[150px]'><h3><b>Title</b></h3></div>
            <div className='-ml-10'><h3><b>Price</b></h3></div>
            <h3><b>Quantity</b></h3>
            <h3><b>Remove</b></h3>
          </div>
          {cart.map((product, index) => (
            <div key={product.id} className='flex flex-col items-center justify-evenly'>
              <div className='flex flex-row items-center justify-around gap-2 w-11/12 mt-2 border-y-2 p-2'>
                <img src={product.image} alt="" className='w-[40px] h-[40px]' />
                <div className='w-[160px]'><h3>{product.title}</h3></div>
                <p>${(product.price * counts[index]).toFixed(2)}</p>
                <div className='flex items-center gap-2'>
                  <button onClick={() => decrease(index)} className='bg-black text-white p-2 w-[40px] h-[40px] rounded-full'>−</button>
                  <span>{counts[index]}</span>
                  <button onClick={() => increase(index)} className='bg-black text-white p-2 w-[40px] h-[40px] rounded-full'>+</button>
                </div>
                <button onClick={() => removeFromCart(product.id)}><MdDelete size={30} color='red' /></button>
              </div>
            </div>
          ))}
          <div className='text-center mt-4'><h1>Cart Totals</h1></div>
          <div className='flex flex-col gap-2 items-center mt-4'>
            <div className='flex flex-row items-center justify-between w-[300px] p-2 border-y-2'>
              <h3>Subtotal</h3>
              <h3>${total.toFixed(2)}</h3>
            </div>
            <div className='flex flex-row items-center justify-between w-[300px] p-2 border-y-2'>
              <h3>Delivery Fee</h3>
              <h3>Free</h3>
            </div>
            <div className='flex flex-row items-center justify-between w-[300px] p-2 border-y-2'>
              <h3><b>Total</b></h3>
              <h3>${total.toFixed(2)}</h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
