/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

import Header from '../Layouts/header';

const Products = require('../Database/Products.json');

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div class="row">
        {Products.map((product) => (
          <div
            className="product"
            key={product.ProID}
            class="col d-flex align-items-stretch"
          >
            <div class="card">
              <a href={`/infoProduct/${product.ProID}`}>
                <img
                  class="card-img-center img-fluid rounded"
                  src={require(`../Assets/Images/products/${product.ProID}/1.png`)}
                />
                <h5>{product.ProName}</h5>
              </a>
              <p color="green">{product.Price}</p>
            </div>
          </div>
        ))}
      </div>
      <div class="row">
        {Products.map((product) => (
          <div
            className="product"
            key={product.ProID}
            class="col d-flex align-items-stretch"
          >
            <div class="card">
              <a href={`/infoProduct/${product.ProID}`}>
                <img
                  class="card-img-center img-fluid rounded"
                  src={require(`../Assets/Images/products/${product.ProID}/1.png`)}
                />
                <h5>{product.ProName}</h5>
              </a>
              <p color="green">{product.Price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
