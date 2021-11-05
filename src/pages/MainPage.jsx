import PropTypes from 'prop-types';
import React, { useState } from 'react';

const MainPage = ({
  purchase,
}) => {
  const [products] = useState([
    {
      id: 1,
      name: 'Coke',
      price: 290,

    },
    {
      id: 2,
      name: 'Beer',
      price: 350,
    },
    {
      id: 3,
      name: 'Ice-cream',
      price: 450,
    },
    {
      id: 4,
      name: 'Vodka',
      price: 5500,
    },
  ]);

  return (
    <>

      <main>
        <div className="products">
          <h2>Products</h2>
          {products.map((product) => (
            <h4 key={product.id}>
              {product.name}
              {' '}
              {product.price}
              Ft
              {' '}
              <button type="button" onClick={() => purchase(product)}>Buy</button>
            </h4>
          ))}
        </div>
      </main>

    </>
  );
};

MainPage.propTypes = {
  purchase: PropTypes.func.isRequired,
};

export default MainPage;
