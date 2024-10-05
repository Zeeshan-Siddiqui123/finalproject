import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import { Spin } from 'antd';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className='flex items-center justify-center'><Spin size='large' /></div>;
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
          <Card key={product.id} id={product.id} product={product} image={product.image} description={product.title} price={product.price} />
        ))}
      </div>
    </div>
  );
};

export default Products;
