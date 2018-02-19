import React from "react";
import { Marker, Popup } from "react-leaflet";
import Leaflet from "leaflet";
import styled from "styled-components";

const image = new Leaflet.Icon({
  iconUrl: require("../../../assets/red_marker.png"),
  iconSize: [50, 50], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const Header = styled.h2`
  text-decoration: underline,
  padding: "2%",
  text-align: centre
  margin-bottom: "0";
`;

const style = {
  width: "30%"
};

const MyPopupMarker = ({ map, position, text }) => (
  <Marker map={map} position={position} icon={image}>
    <Popup style={style}>
      <a href={"/results/" + text}>
        <Header>{text}</Header>
      </a>
    </Popup>
  </Marker>
);

export default MyPopupMarker;
