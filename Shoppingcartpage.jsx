// components/ShoppingCart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  removeFromCart, 
  increaseQuantity, 
  decreaseQuantity 
} from '../redux/actions';
import { Link } from 'react-router-dom';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cart);
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalCost = cartItems.reduce((total, item) => {
    const product = products.find(p => p.id === item.id);
    return total + (product.price * item.quantity);
  }, 0);

  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => {
              const product = products.find(p => p.id === item.id);
              return (
                <div key={item.id} className="cart-item">
                  <img src={product.image} alt={product.name} />
                  <div className="item-details">
                    <h3>{product.name}</h3>
                    <p>${product.price.toFixed(2)} each</p>
                    <div className="quantity-controls">
                      <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                    </div>
                    <button 
                      className="remove-btn"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-summary">
            <p>Total Items: {totalItems}</p>
            <p>Total Cost: ${totalCost.toFixed(2)}</p>
            <button className="checkout-btn" onClick={() => alert('Coming Soon!')}>
              Proceed to Checkout
            </button>
            <Link to="/products" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
