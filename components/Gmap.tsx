import React from "react";
import GoogleMapReact from "google-map-react";

const Gmap = () => {
  const center = {
    lat: 28.6315, // Latitude for Connaught Place
    lng: 77.2167, // Longitude for Connaught Place
  };
  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={center}
        defaultZoom={11}
      ></GoogleMapReact>
    </div>
  );
};

export default Gmap;
