import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ money, addMoney, isEnoughMoney }) => (
  <div>
    <h1>
      My money:
      {' '}
      {money}
      Ft
    </h1>
    {!isEnoughMoney && (
      <h3>Not enough money</h3>
    )}
    {money < 2000 && (
      <h3>Low money</h3>
    )}
    <button type="button" onClick={() => addMoney(1000)}>Add Money </button>
  </div>
);

Header.propTypes = {
  money: PropTypes.number.isRequired,
  addMoney: PropTypes.func.isRequired,
  isEnoughMoney: PropTypes.bool.isRequired,
};
export default Header;
