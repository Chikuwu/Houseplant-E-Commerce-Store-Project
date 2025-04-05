// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const cartItems = useSelector(state => state.cart);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          <div className="cart-icon">
            🛒
            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
