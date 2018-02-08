import React from "react";
import PopUpMarker from "./PopUpMarker";
  
  const MarkersList = ({ map, markers }) => {
    
    const items = markers.map(({ key, ...props }) => (
        <PopUpMarker key={key} map={map} {...props}  />
    ));
    return <div>{items}</div>;
  };

  export default MarkersList;