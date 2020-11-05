import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import Scooters from "../Scooters/Scooters";
import { GOOGLE_MAPS_KEY, generateRandomCoordinate } from "../../utils/utils";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { places: this.props.scooters };
  }
  
  static defaultProps = {
    center: {
      lat: 36.8717135,
      lng: 30.7262676
    },
    zoom: 14
  };
  
  onChildMouseLeave(e) {
    console.log("Mouse Leave", e);
  }
  
  onChildMouseEnter(e) {
    console.log("Mouse Enter", e);
  }
  
  addScooters() {
    const randomScooters = [
      {
        id: Math.random(),
        lat: generateRandomCoordinate(36.85, 36.86, 3),
        lng: generateRandomCoordinate(30.76, 30.77, 3)
      },
      {
        id: Math.random(),
        lat: generateRandomCoordinate(36.87, 36.88, 3),
        lng: generateRandomCoordinate(30.75, 30.76, 3)
      },
      {
        // The PARKED Scooter!
        id: Math.random(),
        lat: generateRandomCoordinate(36.87152, 36.87152, 3),
        lng: generateRandomCoordinate(30.7193, 30.7193, 3)
      },
      {
        id: Math.random(),
        lat: generateRandomCoordinate(36.8711, 36.8715, 3),
        lng: generateRandomCoordinate(30.7183, 30.7253, 3)
      },
      {
        id: Math.random(),
        lat: generateRandomCoordinate(36.8816, 36.8818, 3),
        lng: generateRandomCoordinate(30.7120, 30.7258, 3)
      },
      {
        id: Math.random(),
        lat: generateRandomCoordinate(36.8813, 36.8893, 3),
        lng: generateRandomCoordinate(30.7107, 30.7207, 3)
      },
      {
        id: Math.random(),
        lat: generateRandomCoordinate(36.8813, 36.8893, 3),
        lng: generateRandomCoordinate(30.7107, 30.7207, 3)
      },
      {
        id: Math.random(),
        lat: generateRandomCoordinate(36.900, 36.905, 3),
        lng: generateRandomCoordinate(30.701, 30.711, 3)
      },
      {
        id: Math.random(),
        lat: generateRandomCoordinate(36.885, 36.905, 3),
        lng: generateRandomCoordinate(30.720, 30.725, 3)
      }
    ];
    
    this.setState({ scooters: randomScooters });
  }
  
  componentDidMount() {
    this.intervalId = setInterval(this.addScooters.bind(this), 2000);
  }
  
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  
  render() {
    return (
        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact
              bootstrapURLKeys={{ key: GOOGLE_MAPS_KEY }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
              onChildMouseEnter={this.onChildMouseEnter}
              onChildMouseLeave={this.onChildMouseLeave}
          >
            {!!this.state.scooters && this.state.scooters.map((scooter) => {
              return (
                  <Scooters
                      key={scooter.id}
                      lat={scooter.lat}
                      lng={scooter.lng}
                  />
              );
            })}
          </GoogleMapReact>
        </div>
    );
  }
}

export default Map;
