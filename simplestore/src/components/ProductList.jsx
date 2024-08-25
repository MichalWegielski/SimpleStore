import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('default');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const sortProducts = (products, order) => {
    if (order === 'title') {
        return [...products].sort((a, b) => a.title.localeCompare(b.title));
      } else if (order === 'price') {
        return [...products].sort((a, b) => a.price - b.price);
      }
      return products;
  }

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  const sortedProducts = sortProducts(products, sortOrder);

  return (
    <>
    <div className='sortForm'>
        <label htmlFor="sort">Sort by: </label>
        <select id="sort" value={sortOrder} onChange={handleSortChange}>
          <option value="default">Default</option>
          <option value="title">Title</option>
          <option value="price">Price</option>
        </select>
      </div>
      {sortedProducts.map((product) => (
        <Link className='productLink' key={product.id} to={`/productsDetails/${product.id}`}>
        <div className='product'>
          <img className='productImage' src={product.image} alt={product.title}/>
          <h4 className='productTitle'>{product.title}</h4>
          <p className='productPrice'>Price: ${product.price}</p>
        </div>
        </Link>
      ))}
    </>
  );
}

export default ProductList;
