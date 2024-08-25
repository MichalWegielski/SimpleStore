import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';

const ProductDetails = () => {

 const { id } = useParams();
 const [product, setProduct] = useState(null);
 const [loading, setLoading] = useState(true);
  
 useEffect(() => {

  localStorage.setItem('returnTo', `productsDetails/${id}`);

   fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(json => {
      setProduct(json);
        setLoading(false);
      })
    .catch(error => {
          console.error('Error fetching product details:', error);
          setLoading(false);
        });
    }, [id]);
  
    if (loading) {
      return <p>Loading product details...</p>;
    }
  
    if (!product) {
      return <p>Product not found</p>;
    }

  return (
    <div className='product-details'>
      <img className='productImage' src={product.image} alt={product.title}/>
      <h1 className='productTitle'>{product.title}</h1>
      <h3 className='productCategory'>{product.category}</h3>
      <p className='productPrice'>Price: ${product.price}</p>
      <p className='productDescription'>{product.description}</p>
    </div>
  )
}

export default ProductDetails
