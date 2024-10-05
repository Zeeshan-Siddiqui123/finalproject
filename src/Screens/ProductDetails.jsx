import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spin, message } from 'antd';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { CartContext } from '../Screens/CartContext';
// import { CartProvider } from './Screens/CartContext';


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setError(error.message);
        message.error('Failed to load product details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <div className='flex items-center justify-center'><Spin size='large' /></div>;
  }

  if (error) {
    return <div className='flex items-center justify-center'><h2>{error}</h2></div>;
  }

  if (!product) {
    return <div>No product found.</div>;
  }

  return (
    <div className='flex flex-row'>
      <div>
        <img src={product.image} alt={product.title} className='w-[700px] h-[500px]' />
      </div>
      <div>
        <h1>{product.title}</h1>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <button className='bg-yellow-500 rounded-full' onClick={() => addToCart(product)}>
            <MdOutlineShoppingCart size='30' color='white' />
          </button>
      </div>
    </div>
  );
};

export default ProductDetails;
