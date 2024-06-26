import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Routes } from 'react-router';
import HomePage from './components/Pages/HomePage';
import AboutPage from './components/Pages/AboutPage';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartContext from './context/CartContext';
import Products from './components/Products/Products';
import DisplayCart from './components/ReduxAddToCart/DisplayCart';


// import {a,b} from './Products'; // destructuring in JS
function App() {
  // state variable
  // inc
  // dec
  let [cart, setCart] = useState({});
  function increaseQuantity(product) {
    const newCart = { ...cart };
    // if(cart[product.id])
    if (!newCart[product.id]) {
      newCart[product.id] = {
        ...product,
        quantity: 0
      };
    }
    newCart[product.id].quantity += 1;
    console.log(newCart);
    setCart(newCart);
  }

  function decreaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setCart(newCart);
  }

  return (
    <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity}}>
      <div className="App">
      <Products cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
      <DisplayCart />
      </div>
    </CartContext.Provider>
  );
}


export default App;
