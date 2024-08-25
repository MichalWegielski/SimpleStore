import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Router>
          <Navbar/>
          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/productsDetails/:id" element={<ProductDetailsPage />} />
            </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
