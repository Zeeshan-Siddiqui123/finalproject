import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import {  Spin } from 'antd';

const Products = () => {
  // State to store products data
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);  // Set fetched products into state
        setLoading(false);  // Stop loading when data is fetched
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();  // Call the fetch function
  }, []);  // Empty dependency array means this will run once when the component mounts

  if (loading) {
    return <div className='flex items-center justify-center top-2/4'> <Spin size='large'/></div>;
  }

  return (
    <div>
      <div className='main-banner'>
        <div className='flat-discount'>
          <div>
            <h1>Flat 50% off</h1>
            <h3><span>12</span> Hours <span>20</span> Minutes</h3>
          </div>
          <div className='image-women'></div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", flexWrap: "wrap", marginTop: "2rem" }}>
        {products.map(product => (
          <Card key={product.id} id={product.id} product={product} image={product.image} description={product.title} price={product.price}/>
        ))}
      </div>
    </div>
  );
};

export default Products;
