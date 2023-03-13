import React, { useRef, useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapMarker from "./mapMarker";

const StagesMap = () => {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    zoom: 10,
  });
  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      initialViewState={viewport}
      style={{ width: "100%", height: "100dvh" }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
    >
      <Marker longitude={viewport.longitude} latitude={viewport.latitude}>
        <MapMarker />
      </Marker>
    </Map>
  );
};

export default StagesMap;
