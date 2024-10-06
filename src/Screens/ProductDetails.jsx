import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Spin, message, Button } from 'antd';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { CartContext } from '../Screens/CartContext';
import StarRating from '../Components/StarRating';
import { LuBus } from "react-icons/lu";


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
    return <div>No product found.</div>
  }

  return (
    <div className='container mx-auto p-4 flex flex-col md:flex-row mt-16'>
      <div className='flex-1 '>
        <img src={product.image} alt={product.title} className='w-[400px] h-[450px] rounded-lg shadow-lg ml-16 mt-0' />
      </div>
      <div className='flex-1 p-4 gap-0'>
        <h1 className='text-2xl font-bold mb-2'>{product.title}</h1>
        <p className='text-lg mb-2'><strong>Price:</strong> ${product.price.toFixed(2)}</p>
        <p className='text-md mb-2'><strong>Description:</strong> {product.description}</p>
        <p className='text-md mb-2'><strong>Category:</strong> {product.category}</p>
        {product.rating && (
          <div className='flex items-center mb-2'>
            <strong>Rating:</strong>
            <StarRating rating={product.rating.rate} /> 
            <span className='ml-2'>({product.rating.count} reviews)</span>
          </div>
        )}
        <div className='flex items-center space-x-2'>
          <Button
            type='primary'
            className='bg-yellow-500 flex items-center'
            onClick={() => addToCart(product)}
          >
            <MdOutlineShoppingCart size='20' color='white' />
            <span className='ml-2'>Add to Cart</span>
          </Button>
          <Button
            type='primary'
            className='bg-[#f49521] flex items-center'
            onClick={() => addToCart(product)}
          >
            <LuBus size='20' color='white' />
            <span className='ml-2'>Order Now</span>
          </Button>
        </div>
      </div>
      <Button >
        <Link to="/products">Go Back</Link>
      </Button>
    </div>
  );
};

export default ProductDetails;
