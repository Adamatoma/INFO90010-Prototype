import React from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import { render } from "@testing-library/react";
import Navbar from "../components/Navbar1";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './guideline.css';
import logo from '../icons/Home.png';
import star from '../icons/star.svg';

class GuidelineRmo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { guideline: [] };
  }

  callAPI() {
    fetch("http://localhost:3000/guideline/rmo")
      .then(res => res.json())
      .then(res => this.setState({ guideline: res.data }))
      .catch(err => console.error(err))
  }

  componentDidMount() {
    this.callAPI();

  }

  render() {
    var result = this.state.guideline;
    var numOfResult = result.length;
    console.log(result);
    return (
      <>
        <div className="heading">
          <img className="logo" src={logo} alt="Logo" />
          <h4 className="name">AusNewRenters</h4>
        </div>

        <div className="sidebar">
          <Navbar />
        </div>

        <div className="container">
          <div className="address">
            <div style={{ fontSize: '9px', color: '#7f7f7f' }}>Home > Guidelines > Rental market overview</div>
          </div>
          <div style={{ fontSize: '9px', color: '#7f7f7f' }}>{numOfResult} guidelines</div>
          <div>
            <ul className="items">
              {result.sort((a, b) => a.Current_Star > b.Current_Star ? -1 : 1)
                .map((item, index) => {
                  return (
                    <li key={index} className="item">
                      <div className="item-start">
                        <h4 className="item-title"> {item.Title} </h4>
                        <h6 className="item-rating"> {item.Current_Star}</h6>
                        <img className="item-star" src={star} alt="Star" />
                      </div>
                      <div style={{ fontSize: '9px', color: '#7f7f7f' }}>Source: {item.Source_Name}</div>
                      <p className="item-content"> {item.Content}</p>
                      <a style={{ fontSize: '9px', color: '#7f7f7f' }} href={item.Source_Link}>{item.Source_Link}</a>
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </>

    );
  }
}

export default GuidelineRmo;