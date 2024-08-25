import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className='nav-links'><Link className='nav-link' to="/">Home</Link></li>
        <li className='nav-links'><Link className='nav-link' to="/products">Products</Link></li>
        <li className='nav-links'><Link className='nav-link' to="/productsDetails">ProductsDetails</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
