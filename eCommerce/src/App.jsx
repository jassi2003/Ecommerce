import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Search from './components/Search';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import { items } from './components/Data';


function App() {
  const [data, setdata] = useState([...items]);
  const [cart, setCart] = useState([]);

  return (
    <>
      <Router>
        <Navbar setdata={setdata} cart={cart} />
        <Routes>
          <Route path="/" element={<Product cart={cart} setCart={setCart} items={data} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/search/:term" element={<Search />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
