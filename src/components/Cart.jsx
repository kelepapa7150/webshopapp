import PropTypes from 'prop-types';
import React from 'react';

const Cart = ({ cart }) => (
  <aside>
    <h2>Bought items:</h2>
    {Object.keys(cart).map((id) => (
      <span key={id}>
        {cart[id].name}
        {'-'}
        {cart[id].count}
        {' '}
      </span>
    ))}
  </aside>
);
Cart.propTypes = {
  cart: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Cart;
