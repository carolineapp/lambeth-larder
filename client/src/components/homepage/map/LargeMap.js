import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import MarkersList from "./MarkersList";
import styles from "../../../assets/styles/style.css";

const mapboxToken = require("../../../config.js");

const zoomLevel = 13;

const d = new Date();
const day = d.getDay(); // returns the current day as a value between 0-6 where Sunday = 0
const hours = d.getHours();
const minutes = d.getMinutes();
const time = `${hours}:${minutes}`;

class LargeMap extends Component {
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
    
      const mapTime = {
      0: "Sunday_Open",
      1: "Monday_Open",
      2: "Tuesday_Open",
      3: "Wednesday_Open",
      4: "Thursday_Open",
      5: "Friday_Open",
      6: "Saturday_Open",
      7: "Sunday_Close",
      8: "Monday_Close",
      9: "Tuesday_Close",
      10: "Wednesday_Close",
      11: "Thursday_Close",
      12: "Friday_Close",
      13: "Saturday_Close"
    };

    let today = [];
    let tomorrow = [];
    let later = [];
    let sortedItems = [];

    const sortByTime = () => {
      if (this.props.result) {
        this.props.result.map(a => {
          if (a[mapTime[day]] !== "Closed" && time < a[mapTime[day + 7]]) {
            today.push(a);
          }
        });
        this.props.result.map(a => {
          if (a[mapTime[day + 1]] !== "Closed") {
            tomorrow.push(a);
          }
        });
        this.props.result.map(a => {
          later.push(a);
        });
      }
    };

    const getTimeOptionArr = () => {
      if (this.props.result) {
        if (this.props.timeOption === "today") {
          sortedItems = today;
        } else if (this.props.timeOption === "tomorrow") {
          sortedItems = tomorrow;
        } else {
          sortedItems = later;
        }
      } else {
      }
    };

    sortByTime();
    getTimeOptionArr();

    //added on Friday 21st//
    let advice = [];
    let food = [];

    const sortByAdvice = () => {
      if (sortedItems) {
        food = sortedItems.filter(function(item) {
          return item.FoodCentre === "true";
        });
        advice = sortedItems.filter(function(item) {
          return item.FoodCentre === "false";
        });
      }
    };
    sortByAdvice();
    //----------------------------//
    let flatten = [];
    const getLatLong = () => {
      //need to check that sortAdice has completed first?//
      if (sortedItems && this.props.advice) {
        advice.map((res, i) => {
          flatten.push({
            key: i,
            position: [+res.Lat, +res.Long],
            text: res.Name
          });
        });
      } else if (sortedItems && !this.props.advice) {
        food.map((res, i) => {
          flatten.push({
            key: i,
            position: [+res.Lat, +res.Long],
            text: res.Name
          });
        });
      }
    };

    getLatLong();

    let centre = [];
    if (this.props.lat) {
      centre = [this.props.lat, this.props.long];
    } else {
      centre = [51.456277, -0.105462];
    }

    return (
      <div>
        <Map
          ref={m => {
            this.leafletMap = m;
          }}
          center={centre}
          zoom={zoomLevel}
          style={{ height: "73vh", width: "100vw" }}
        >
          <TileLayer attribution={attr} url={url} id="mapbox.streets" />

          {flatten.length > 0 && <MarkersList flatten={flatten} />}
        </Map>
      </div>
    );
  }
}

export default LargeMap;
