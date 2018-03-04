import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import MarkersList from "./MarkersList";
import styles from "../../../assets/styles/style.css";
import styled from "styled-components";

const mapboxToken = "pk.eyJ1IjoiZGV2Z3JycmwiLCJhIjoiY2plNjFyOTVnMmlmdDJ3anJyZWtzYWtlYiJ9.-wfqcqne9aj8roI0gAAz7g"



const zoomLevel = 13;
const d = new Date();
const day = d.getDay(); // returns the current day as a value between 0-6 where Sunday = 0


const MapContainer = styled.div`
  @media screen and (min-width: 600px) {
  }
`;
class MapWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentZoomLevel: zoomLevel
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

    const url = 'https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=' + mapboxToken;


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

    let sortedItemsTime = [];

    const sortByTime = () => {
      if (this.props.result) {
        if (this.props.timeOption === "today") {
          sortedItemsTime = this.props.result.filter(function(r) {
            return r[mapTime[day]] !== "Closed";
          });
        } else if (this.props.timeOption === "tomorrow") {
          sortedItemsTime = this.props.result.filter(function(r) {
            return r[mapTime[day + 1]] !== "Closed";
          });
        } else {
          sortedItemsTime = this.props.result;
        }
      }
    };

    if (this.props.result) {
      sortByTime();
    }

    let advice = [];
    let food = [];

    const sortByAdvice = () => {
      if (sortedItemsTime) {
        food = sortedItemsTime.filter(function(item) {
          return item.FoodCentre === "true";
        });
        advice = sortedItemsTime.filter(function(item) {
          return item.FoodCentre === "false";
        });
      }
    };

    sortByAdvice()
//----------------------------//

    let flatten = [];
    const getLatLong = () => {
      //need to check that sortAdice has completed first?//
      if (sortedItemsTime && this.props.advice) {
        advice.map((res, i) => {
          flatten.push({
            key: i,
            position: [+res.Lat, +res.Long],
            text: res.Name
          });
        });

      } else if(sortedItemsTime && !this.props.advice) {

        food.map((res, i) => {
          flatten.push({
            key: i,
            position: [+res.Lat, +res.Long],
            text: res.Name
          });
        });
      }
    };
    let centre = [];

    if (this.props.lat) {
      centre = [this.props.lat, this.props.long];
    } else {
      centre = [51.456277, -0.105462];
    }

    return (
      <MapContainer>
        {
          <Map
            ref={m => {
              this.leafletMap = m;
            }}
            center={centre}
            zoom={zoomLevel}
          >
            <TileLayer attribution={false} url={url} id="mapbox.streets" />
            {this.props.adviceCentres === true
              ? getLatLong(advice)
              : getLatLong(food)}
            <MarkersList flatten={flatten} />}
          </Map>
        }
      </MapContainer>
    );
  }
}

export default MapWindow;
