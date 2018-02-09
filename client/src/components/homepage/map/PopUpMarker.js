import React from "react";
import { Marker, Popup } from "react-leaflet";

const MyPopupMarker = ({ map, position, text }) => (
    <Marker map={map} position={position}>
      <Popup>
        <span>{text}</span>
      </Popup>
    </Marker>
  );

  export default MyPopupMarker;