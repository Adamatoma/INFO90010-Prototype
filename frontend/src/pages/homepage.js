import React from "react";
import { Link } from "react-router-dom";
import {
    withGoogleMap,
    withScriptjs,
    useLoadScript,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";
import Navbar from "../components/Navbar";
import logo from '../icons/Home.png';
import guidelineIcon from '../icons/guideline.svg';
import pcIcon from '../icons/pc-icon.svg';
import './homepage.css';
import * as propertyData from "../components/skateboard-parks.json";
import Background from '../icons/background.png';

var backgroundStyle = {
    position: 'absolute',
    backgroundSize: 'cover',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundRepeat: 'no-repeat',
    opacity: '0.3',
    backgroundImage: `url(${Background})`
};
var logoStyle = {
    position: 'absolute',
    width: "160px",
    height: "160px",
    backgroundRepeat: 'no-repeat',
    margin: '100px 0 0 320px'
};
var nameStyle = {
    position: 'absolute',
    fontSize: '63px',
    top: '117px',
    left: '520px'
};
var descriptionStyle = {
    position: 'absolute',
    color: '#ed683c',
    fontSize: '20px',
    top: '206px',
    left: '560px'
};
var giStyle = {
    position: 'absolute',
    width: "125px",
    height: "125px",
    backgroundRepeat: 'no-repeat',
    margin: '350px 0 0 360px'
};
var pciStyle = {
    position: 'absolute',
    width: "125px",
    height: "125px",
    backgroundRepeat: 'no-repeat',
    margin: '350px 0 0 760px'
};
var gdStyle = {
    position: 'absolute',
    color: '#f59a23',
    fontSize: '25px',
    top: '500px',
    left: '320px'
};
var pcdStyle = {
    position: 'absolute',
    color: '#f59a23',
    fontSize: '25px',
    top: '500px',
    left: '720px'
};

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pc: [] };
    }


    render() {

        return (
            <>
                <div className="home" style={backgroundStyle}>
                </div>
                <div className="title-name">
                    <img className="homepage-logo" src={logo} style={logoStyle} alt="Logo" />
                    <h1 className="name" style={nameStyle}>AusNewRenters</h1>
                    <h4 style={descriptionStyle}>Australia’s rental content aggregation website</h4>
                    <Link to="/guideline/sign-the-lease"><img src={guidelineIcon} style={giStyle} /></Link>
                    <Link to="/priceComparison"><img src={pcIcon} style={pciStyle} /></Link>
                    <h4 style={gdStyle}>Rental Guidelines</h4>
                    <h4 style={pcdStyle}>Price Comparison</h4>
                </div>




            </>

        );
    }
}





export default HomePage;