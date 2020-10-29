import React, { useState, useEffect } from "react";
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
import './priceComparison.css';
import * as propertyData from "../components/skateboard-parks.json";
import Map from '../components/Map';
import Background from '../icons/background.png';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

// function Map() {
//   const [markers, setMarkers] = React.useState([]);
//   const [selectedBuilding, setselectedBuilding] = useState(null);
//   useEffect(() => {
//     const listener = e => {
//       if (e.key === "Escape") {
//         setselectedBuilding(null);
//       }
//     };
//     window.addEventListener("keydown", listener);

//     return () => {
//       window.removeEventListener("keydown", listener);
//     };
//   }, []);

//   const onMapClick = React.useCallback((e) => {
//     setMarkers((current) => [
//       ...current,
//       {
//         lat: e.latLng.lat(),
//         lng: e.latLng.lng(),
//         time: new Date(),
//       },
//     ]);
//   }, []);

//   const mapRef = React.useRef();
//   const onMapLoad = React.useCallback((map) => {
//     mapRef.current = map;
//   }, []);

//   const panTo = React.useCallback(({ lat, lng }) => {
//     mapRef.current.panTo({ lat, lng });
//     console.log("calling panTo function to ", lat, ",", lng);
//     mapRef.current.setZoom(14);
//   }, []);

//   return (
//     <div>
//       <Search panTo={panTo} />
//       <GoogleMap
//         id="map"
//         defaultZoom={15}
//         defaultCenter={{ lat: -37.807695, lng: 144.961434 }}
//         onLoad={onMapLoad}
//       >
//         {propertyData.Buildings.map(building => (
//           <Marker
//             key={building.Id}
//             position={{
//               lat: building.geometry.coordinates[1],
//               lng: building.geometry.coordinates[0]
//             }}
//             onClick={() => {
//               setselectedBuilding(building);
//             }}
//           />
//         ))}

//         {selectedBuilding && (
//           <InfoWindow
//             onCloseClick={() => {
//               setselectedBuilding(null);
//             }}
//             position={{
//               lat: selectedBuilding.geometry.coordinates[1],
//               lng: selectedBuilding.geometry.coordinates[0]
//             }}
//           >
//             <div>
//               {selectedBuilding.Properties
//                 .sort((a, b) => a.Origin[0].Price - b.Origin[0].Price)
//                 .map((property, index) => {
//                   return (
//                     <div key={index} className="card">
//                       <div className="content-image">
//                         <img className="image" style={imageStyle} src={property.Src} />
//                       </div>
//                       <div className="content-left">
//                         <p>Agent: {property.Agent}</p>
//                         <p>Type:{property.Bedroom} Bedroom {property.Bathroom} Bathroom {property.Parking} Parking area</p>
//                         <p>Location: {property.Location}</p>
//                         <p>Distance:</p>
//                       </div>
//                       <div className="content-right">
//                         {property.Origin.map((Source, index) => {
//                           return (
//                             <div key={index} className="content-right-main">
//                               <div className="content-right-name">
//                                 <a href={Source.Url}>{Source.Name}</a>
//                               </div>
//                               <div className="content-right-price">
//                                 <p>$ {Source.Price}</p>
//                               </div>
//                             </div>
//                           )
//                         })
//                         }
//                       </div>
//                     </div>
//                   )
//                 })
//               }
//             </div>

//           </InfoWindow>
//         )}
//       </GoogleMap>
//     </div>
//   );
// }

// function Search({ panTo }) {
//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//   } = usePlacesAutocomplete({
//     requestOptions: {
//       location: { lat: () => 43.6532, lng: () => -79.3832 },
//       radius: 100 * 1000,
//     },
//   });

//   // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

//   const handleInput = (e) => {
//     setValue(e.target.value);
//   };

//   const handleSelect = async (address) => {
//     setValue(address, false);
//     clearSuggestions();

//     try {
//       const results = await getGeocode({ address });
//       const { lat, lng } = await getLatLng(results[0]);
//       // console.log(result);
//       // panTo({ lat, lng });
//     } catch (error) {
//       console.log("😱 Error: ", error);
//     }
//   };

//   return (
//     <div className="search">
//       <Combobox onSelect={handleSelect}>
//         <ComboboxInput
//           value={value}
//           onChange={handleInput}
//           disabled={!ready}
//           placeholder="Search your location"
//         />
//         <ComboboxPopover>
//           <ComboboxList>
//             {status === "OK" &&
//               data.map(({ id, description }) => (
//                 <ComboboxOption key={id} value={description} />
//               ))}
//           </ComboboxList>
//         </ComboboxPopover>
//       </Combobox>
//     </div>
//   );
// }


var backgroundStyle = {
  backgroundSize: 'cover',
  height: "300px",
  backgroundRepeat: 'no-repeat',
  opacity: '0.3',
  backgroundImage: `url(${Background})`

};

var paddingStyle = {
  position: "absolute",
  left: "190px",
  top: "150px",
  width: "915px",
  height: "172px",
  backgroundColor: 'Red',
  opacity: '0.3'
};
var desStyle = {
  position: 'absolute',
  color: '#ed683c',
  fontSize: '18px',
  top: '165px',
  left: '220px'
};

class PriceComparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pc: []
    }
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
    const MapWrapped = withScriptjs(withGoogleMap(Map));

    return (
      <>
        <div className="heading">
          <img className="logo" src={logo} alt="Logo" />
          <h4 className="name">AusNewRenters</h4>
        </div>

        <div className="sidebar">
          <Navbar />
        </div>
        <div className="text-box" style={backgroundStyle}>
          <div style={paddingStyle}></div>
        </div>
        <div className="map-container">
          <p style={desStyle}>Search rental properties:</p>
          <div style={{ width: "906px", height: "458px" }}>
            <Map />
          </div>
        </div>

        {/* <div className="map-container">
          <div style={{ width: "906px", height: "458px" }}>
            <MapWrapped
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                process.env.REACT_APP_GOOGLE_KEY
                }&language=en-AU`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div> */}
      </>

    );
  }
}





export default PriceComparison;