import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((json: Product[]) => setProducts(json));
  }, []);

  const goToDetail = (item: Product) => {
    navigate(`/detail/${item.id}`);
  };

  return (
    <div className="container">
      <h1 className="title">Dashboard</h1>
      <div className="product-grid">
        {products.map(item => (
          <div
            key={item.id}
            onClick={() => goToDetail(item)}
            className="product-card"
          >
            <img src={item.image} alt={item.title} className="product-image" />
            <h5 className="product-title">{item.title}</h5>
            <p className="product-price">${item.price.toFixed(2)}</p> {/* Display price */}
          </div>
        ))}
      </div>
    </div>
  );
}
