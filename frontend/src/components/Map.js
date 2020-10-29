import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
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
import * as propertyData from "./skateboard-parks.json";
import { getDistance } from 'geolib';
import { Button } from 'react-bootstrap';
// import { formatRelative } from "date-fns";

import "@reach/combobox/styles.css";
// import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  height: "458px",
  width: "906px",
};
const options = {
  // styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

var imageStyle = {
  width: "200px",
  height: "200px",
  backgroundRepeat: 'no-repeat'
};

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    language: "en-AU",
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [center, setCenter] = useState({ lat: -37.807695, lng: 144.961434 });
  const [selectedBuilding, setselectedBuilding] = useState(null);
  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setselectedBuilding(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  const onMapClick = React.useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
    // setCenter({ lat, lng });
  }, []);

  // const propertyDistance = React.useCallback((lat, lng)=>{
  //   if (selectedBuilding == null){
  //     return 0
  //   }else{
  //     return getDistance({center},{lat, lng})
  //   }
  // });


  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <Search panTo={panTo} />

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
          </InfoWindow>
        ) : null}
        {propertyData.Buildings.map(building => (
          <Marker
            key={building.Id}
            position={{
              lat: building.geometry.coordinates[1],
              lng: building.geometry.coordinates[0]
            }}
            onClick={() => {
              setselectedBuilding(building);
            }}
          />
        ))}

        {selectedBuilding && (
          <InfoWindow
            onCloseClick={() => {
              setselectedBuilding(null);
            }}
            position={{
              lat: selectedBuilding.geometry.coordinates[1],
              lng: selectedBuilding.geometry.coordinates[0]
            }}
          >
            <div>
              {selectedBuilding.Properties
                .sort((a, b) => a.Origin[0].Price - b.Origin[0].Price)
                .map((property, index) => {
                  return (
                    <div key={index} className="card">
                      <div className="content-image">
                        <img className="image" style={imageStyle} src={property.Src} />
                      </div>
                      <div className="content-left">
                        <p>Agent: {property.Agent}</p>
                        <p>Type: {property.Bedroom} Bedroom {property.Bathroom} Bathroom {property.Parking} Parking area</p>
                        <p>Location: {property.Location}</p>
                        {/* <p>Distance: {propertyDistance=selectedBuilding.geometry.coordinates}</p> */}
                      </div>
                      <div className="content-right">
                        {property.Origin.map((Source, index) => {
                          return (
                            <div key={index} className="content-right-main">
                              <div className="content-right-name">
                                <a href={Source.Url}>{Source.Name}</a>
                              </div>
                              <div className="content-right-price">
                                <p>$ {Source.Price}</p>
                              </div>
                            </div>
                          )
                        })
                        }
                      </div>
                    </div>
                  )
                })
              }
            </div>

          </InfoWindow>
        )}
      </GoogleMap>
    </div >
  );
}

function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img src="/compass.svg" alt="compass" />
    </button>
  );
}

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  var buttonStyle = {
    color: 'black',
    position: 'absolute',
    height: '42px',
    width: '100px',
    backgroundColor: '#ed683c',
    fontSize: '16px',
    top: '0px',
    left: '600px'
  }
  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      // console.log(result);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Enter a location you prefer to live around"
        />
        <Button variant="warning" style={buttonStyle}>Search</Button>
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
