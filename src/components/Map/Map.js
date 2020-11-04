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
    zoom: 13
  };
  
  onChildMouseLeave(e) {
    console.log("Mouse Leave", e);
  }
  
  onChildMouseEnter(e) {
    console.log("Mouse Enter", e);
  }
  
  addPlace() {
    const randomScooters = [
      {
        id: Math.random(),
        lat: generateRandomCoordinate(36.87, 36.87, 3),
        lng: generateRandomCoordinate(30.72, 30.74, 3)
      },
      {
        id: Math.random(),
        lat: generateRandomCoordinate(36.86, 36.87, 3),
        lng: generateRandomCoordinate(30.72, 30.76, 3)
      },
      {
        id: Math.random(),
        lat: generateRandomCoordinate(36.88, 36.87, 3),
        lng: generateRandomCoordinate(30.72, 30.75, 3)
      },
      {
        id: Math.random(),
        lat: generateRandomCoordinate(36.89, 36.89, 3),
        lng: generateRandomCoordinate(30.75, 30.72, 3)
      },
      {
        id: Math.random(),
        lat: generateRandomCoordinate(36.91, 36.92, 3),
        lng: generateRandomCoordinate(30.72, 30.77, 3)
      },
      
      {
        id: Math.random(),
        lat: generateRandomCoordinate(36.83, 36.84, 3),
        lng: generateRandomCoordinate(30.72, 30.75, 3)
      },
      {
        id: Math.random(),
        lat: generateRandomCoordinate(36.96, 36.97, 3),
        lng: generateRandomCoordinate(30.75, 30.72, 3)
      },
      {
        id: Math.random(),
        lat: generateRandomCoordinate(36.92, 36.93, 3),
        lng: generateRandomCoordinate(30.72, 30.77, 3)
      }
    ];
    
    this.setState({ scooters: randomScooters });
  }
  
  componentDidMount() {
    this.intervalId = setInterval(this.addPlace.bind(this), 2000);
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
            {!!this.state.scooters &&
            this.state.scooters.map((scooter) => {
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
