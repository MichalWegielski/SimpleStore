import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [returnTo, setReturnTo] = useState(null);

  useEffect(() => {
    const savedReturnTo = localStorage.getItem('returnTo');
    setReturnTo(savedReturnTo);
  }, []);

  console.log(returnTo)
  return (
    <>
        <h1>HomePage</h1>
        {returnTo && (
        <Link to={returnTo}>Go back to last viewed product</Link>
      )}
    </>
  )
}

export default HomePage
