import React from 'react'
import ProductList from '../components/ProductList'
import '../assets/styles/productList.css';

const ProductPage = () => {
  return (
    <div className='product-list'>
        <h1>Products</h1>
        <ProductList/>
    </div>
  )
}

export default ProductPage
