import React, { Component } from "react";
import { render } from "react-dom";
import { Map, TileLayer } from "react-leaflet";
import Control from "react-leaflet-control";
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
    this.handleUpPanClick = this.handleUpPanClick.bind(this);
    this.handleRightPanClick = this.handleRightPanClick.bind(this);
    this.handleLeftPanClick = this.handleLeftPanClick.bind(this);
    this.handleDownPanClick = this.handleDownPanClick.bind(this);
  }

  componentDidMount() {
    const leafletMap = this.leafletMap.leafletElement;
    leafletMap.on("zoomend", () => {
      const updatedZoomLevel = leafletMap.getZoom();
      this.handleZoomLevelChange(updatedZoomLevel);
    });
  }

  //these control the pan (left/right/up/down) buttons

  handleZoomLevelChange(newZoomLevel) {
    this.setState({ currentZoomLevel: newZoomLevel });
  }

  handleUpPanClick() {
    const leafletMap = this.leafletMap.leafletElement;
    leafletMap.panBy([0, -100]);
    window.console.log("Panning up");
  }

  handleRightPanClick() {
    const leafletMap = this.leafletMap.leafletElement;
    leafletMap.panBy([100, 0]);
    window.console.log("Panning right");
  }
  handleLeftPanClick() {
    const leafletMap = this.leafletMap.leafletElement;
    leafletMap.panBy([-100, 0]);
    window.console.log("Panning left");
  }
  handleDownPanClick() {
    const leafletMap = this.leafletMap.leafletElement;
    leafletMap.panBy([0, 100]);
    window.console.log("Panning down");
  }

  render() {
    const url = `https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=${
      mapboxToken.key
    }`;

    const attr =
      'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>';

    const markers = [
      {
        key: "Brixton Soup Kitchen",
        position: [51.463573, -0.105635],
        text: "Brixton Soup Kitchen"
      },
      {
        key: "Clapham Park Food Bank",
        position: [51.450352, -0.140896],
        text: "Clapham Park Food Bank"
      },
      {
        key: "Vauxhall Foodbank",
        position: [51.488008, -0.119185],
        text: "Vauxhall Foodbank"
      },
      {
        key: "Naybur's Pantry",
        position: [51.474372, -0.109479],
        text: "Naybur's Pantry"
      }
    ];

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

          <MarkersList markers={markers} />

          <Control position="topright">
            <div
              style={{
                padding: "5px"
              }}
            >
              <div style={{ marginLeft: "37px" }}>
                <button onClick={this.handleUpPanClick}>Pan up</button>
              </div>
              <div>
                <button onClick={this.handleLeftPanClick}>Pan left</button>
                <button onClick={this.handleRightPanClick}>Pan right</button>
              </div>
              <div style={{ marginLeft: "30px" }}>
                <button onClick={this.handleDownPanClick}>Pan down</button>
              </div>
            </div>
          </Control>
        </Map>
      </div>
    );
  }
}

export default MapWindow;
