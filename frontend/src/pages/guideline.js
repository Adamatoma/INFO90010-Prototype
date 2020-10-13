import React from "react";
import { Link } from "react-router-dom";


const Guideline = () => {

  return (
    <div className="container">
      <Link to="/">
        <button type="button" class="btn btn-outline-primary">Home</button>
      </Link>
      <Link to="/guideline">
        <button type="button" class="btn btn-primary">Guideline</button>
      </Link>
      <Link to="/priceComparison">
        <button type="button" class="btn btn-outline-primary">Price Comparison</button>
      </Link>
      <div>
        <h2>Guideline contents...</h2>
      </div>
    </div>

  );
};

export default Guideline;