import React, { useState, useEffect } from 'react';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import * as parkData from "../component/skateboard-parks.json";

import GoogleMapReact from 'google-map-react';
// import 'google-map-react/dist/index.css'

import './priceComparison.css';

const LOS_ANGELES_CENTER = [34.0522, -118.2437];
const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

const Test = () => {
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
    <div style={{ width: "100vw", height: "100vh" }}>
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
    </div>
  )
}

export default Test
