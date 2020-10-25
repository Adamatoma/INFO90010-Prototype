import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Navbar from "../components/Navbar";
import logo from '../icons/Home.png';
import GoogleMapReact from 'google-map-react';
import Marker from '../components/Marker';
import './priceComparison.css';

const LOS_ANGELES_CENTER = [34.0522, -118.2437];
const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

class PriceComparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pc: [] };
  }


  callAPI() {
    fetch("http://localhost:3000/priceComparison")
      .then(res => res.json())
      .then(res => this.setState({ pc: res.data }))
      .catch(err => console.error(err))
  }

  componentDidMount() {
    this.callAPI();

  }

  render() {
    // var result = this.state.pc;
    // var numOfResult = result.length;
    // console.log(result);
    const [places, setPlaces] = useState([])

    const fetchPlaces = async () => {
      fetch('places.json')
        .then((response) => response.json())
        .then((data) => setPlaces(data.results))
    }

    useEffect(() => {
      fetchPlaces();
    }, [])

    if (!places || places.length === 0) {
      return null;
    }
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
          <Wrapper>
            <GoogleMapReact
              defaultZoom={10}
              defaultCenter={LOS_ANGELES_CENTER}
            >
              {places.map((place) => (
                <Marker
                  key={place.id}
                  text={place.name}
                  lat={place.geometry.location.lat}
                  lng={place.geometry.location.lng}
                />
              ))}
            </GoogleMapReact>
          </Wrapper>
          <div>
            {/* <ul className="items">
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
                      <div style={{ fontSize: '9px', color: '#7f7f7f' }}>{item.Source_Link}</div>
                    </li>
                  )
                })}
            </ul> */}
          </div>
        </div>
      </>

    );
  }
}

export default PriceComparison;