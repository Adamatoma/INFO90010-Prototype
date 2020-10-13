import React from "react";
import { Link } from "react-router-dom";


const PriceComparison = () => {

  return (
    <div className="container">
      <Link to="/">
        <button type="button" class="btn btn-outline-primary">Home</button>
      </Link>
      <Link to="/guideline">
        <button type="button" class="btn btn-outline-primary">Guideline</button>
      </Link>
      <Link to="/priceComparison">
        <button type="button" class="btn btn-primary">Price Comparison</button>
      </Link>
      <div>
        <h2>Price comparison contents...</h2>
      </div>
    </div>

  );
};

export default PriceComparison;