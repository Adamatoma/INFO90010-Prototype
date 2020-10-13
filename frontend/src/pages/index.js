import React from "react";
import { Link } from "react-router-dom";


const MainPage = () => {

    return (
        <div className="container">
            < div >
                <h3> Welcome to the home page of rental information aggregation website</h3>
                <Link to="/login">
                    <div style={{ display: "flex" }}>
                        <button style={{ marginLeft: "auto" }} type="button" class="btn btn-outline-primary">Login / Sign Up</button>
                    </div>
                </Link>
            </div >
            <div>
                <Link to="/guideline">
                    <button type="button" class="btn btn-outline-primary">Go to Guideline</button>
                </Link>
                <Link to="/priceComparison">
                    <button type="button" class="btn btn-outline-primary">Go to Price Comparison</button>
                </Link>
            </div>

        </div>

    );
};

export default MainPage;