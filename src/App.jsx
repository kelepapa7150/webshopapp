import './app.css';

import React, { useState } from 'react';

import Cart from './components/Cart';
import Header from './components/Header';
import MainPage from './pages/MainPage';

export default function App() {
  const [money, setMoney] = useState(5000);
  const [cart, setCart] = useState({});
  const [isEnoughMoney, setIsEnoughMoney] = useState(true);

  const addMoney = (amount) => {
    setMoney(money + amount);
    setIsEnoughMoney(true);
  };

  const addCart = (product) => {
    console.log(product);
    if (cart[product.id]) {
      setCart({
        ...cart,
        [product.id]: { name: product.name, count: cart[product.id].count + 1 },
      });
    } else {
      setCart({
        ...cart,
        [product.id]: { name: product.name, count: 1 },
      });
    }
  };

  const purchase = (product) => {
    if (product.price > money) {
      return setIsEnoughMoney(false);
    }
    setIsEnoughMoney(true);
    addCart(product);
    return setMoney(money - product.price);
  };
  return (
    <>
      <Header money={money} addMoney={addMoney} isEnoughMoney={isEnoughMoney} />
      <MainPage purchase={purchase} addCart={addCart} />
      <Cart cart={cart} />
    </>

  );
}
