import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import MarkersList from "./MarkersList";


const mapboxToken = require("../../../config.js");

const mapCenter = [51.45628, -0.10546];

const zoomLevel = 13;

class MapWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentZoomLevel: zoomLevel,
      lat: 51.45628,
      lng: -0.10546
    };
  }

  componentDidMount() {
    const leafletMap = this.leafletMap.leafletElement;
    leafletMap.on("zoomend", () => {
      const updatedZoomLevel = leafletMap.getZoom();
      this.handleZoomLevelChange(updatedZoomLevel);
    });
  }

  handleZoomLevelChange(newZoomLevel) {
    this.setState({ currentZoomLevel: newZoomLevel });
  }

  render() {
  
    const url = `https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=${
      mapboxToken.key
    }`;

    const attr =
      'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>';

  
  let flatten = [];
   const getLatLong =() =>{
     if (this.props.result) {
      (this.props.result).map((res, i) => {
        flatten.push({key:i, position: [+res.Lat,+res.Long], text:res.Name });
      })
     }
  }

   getLatLong()

    return (
      <div>
        <Map
          ref={m => {
            this.leafletMap = m;
          }}
          center={mapCenter}
          zoom={zoomLevel}
        >
          <TileLayer attribution={attr} url={url} id="mapbox.streets" />

         
          {flatten.length>0 &&
          <MarkersList flatten={flatten}/>
          }
        
        </Map>
      </div>
    );
  }
}

export default MapWindow;
