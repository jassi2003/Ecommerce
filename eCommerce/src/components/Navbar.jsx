import React, { useState } from 'react';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import { items } from './Data';
import { FaCartPlus } from 'react-icons/fa';

// import './Navbar.css'; // Make sure to import the CSS file

const Navbar = ({ setdata,cart}) => {
  const navigate = useNavigate();     
  const [searchTerm, setsearchTerm] = useState("");
  const location = useLocation()
  
  const categoryFilter = (category) => {
    const element = items.filter((prod) => prod.category === category);
    setdata(element);
  };
  
  const priceFilter = (price) => {
    const element = items.filter((priz) => priz.price >= price);
    setdata(element);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <header>
      <div className="nav">
        <Link to={'/'} className="brand">
          <h2>E-commerce</h2>
        </Link>

        <form className="searchh" onSubmit={handleSubmit}>
          <input
            value={searchTerm} 
            onChange={(e) => setsearchTerm(e.target.value)}
            className="search" 
            type="text"
            placeholder="Search Products" 
          />
        </form>

        <Link to={'cart'} className="cart">
          <button type="button" className="inbox-button">
          <FaCartPlus />
            <span id="count">{cart.length}</span>
            {/* <span className="text">unread mssg</span> */}
          </button>
        </Link>
      </div>
{
  location.pathname =='/' &&(
    <div className="nav-nav">
    <div className="items">Filter</div>
    <div className="items">No Filter</div>
    <div className="items" onClick={() => categoryFilter("mobiles")}>Mobiles</div>
    <div className="items" onClick={() => categoryFilter("laptops")}>Laptops</div>
    <div className="items" onClick={() => categoryFilter('tablets')}>Tablets</div>
    <div className="items" onClick={() => priceFilter(29999)}> {">="}29999</div>
    <div className="items" onClick={() => priceFilter(49999)}>{">="}49999</div>
    <div className="items" onClick={() => priceFilter(69999)}>{">="}69999</div>
    <div className="items" onClick={() => priceFilter(89999)}>{">="}89999</div>
  </div>
  )
}
    
    </header>
  );
};

export default Navbar;
