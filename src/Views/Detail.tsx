import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Detail.css';

interface Product {
    id: number;
    title: string;
    image: string;
    description: string;
    price: number;
}

const Detail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null); // Explicitly typing product as Product | null
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchProduct = async () => {
          try {
              const response = await fetch(`https://fakestoreapi.com/products/${id}`);
              if (!response.ok) {
                  throw new Error('Failed to fetch product');
              }
              const data: Product = await response.json(); // Asserting response.json() as Product
              setProduct(data);
              setLoading(false);
          } catch (error) {
              console.error('Error fetching product details:', error);
              setLoading(false);
          }
      };
  
      fetchProduct();
  }, [id]);
  

    const onBack = () => {
        navigate(-1);
    };

    if (loading) return <div className="loading">Loading...</div>;

    // Handling case where product is null
    if (!product) return <div className="loading">Product not found</div>;

    return (
        <div className="detail-container">
          <h1 className='heading'>Detail Page</h1>
            <button className="detail-button" onClick={onBack}>Back</button>
            <h1 className="detail-titles">{product.title}</h1>
            <img className="detail-image" src={product.image} alt={product.title} />
            <p className="detail-description">{product.description}</p>
            <p className="detail-price">Price: ${product.price}</p>
        </div>
    );
};

export default Detail;