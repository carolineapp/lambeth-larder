import React from "react";
import { Marker, Popup } from "react-leaflet";
import Leaflet from 'leaflet';

const image = new Leaflet.Icon({
  iconUrl: require('../../../assets/red_marker.png'),
  iconSize:     [60, 60], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 69], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76]// point from which the popup should open relative to the iconAnchor
})

const styles = {
  padding: "1%"
}

const MyPopupMarker = ({ map, position, text }) => (
  
    <Marker map={map} position={position} icon={image} >
      <Popup>
        <a  href={'/results/' + text}><p style= {styles}>{text}</p></a>
      </Popup>
    </Marker>
  );

  export default MyPopupMarker;