import React, { useRef, useEffect, useState } from "react";
import Map, { Marker, Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapMarker from "./mapMarker";

const StagesMap = () => {
  const [viewport, setViewport] = useState({
    latitude: 59.2677363,
    longitude: 10.4080715,
    zoom: 5,
  });

  const lineData = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: [
        [10.4080715, 59.2677363],
        [10.684738, 53.866444],
      ],
    },
  };

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      initialViewState={viewport}
      style={{ width: "100%", height: "100dvh" }}
      mapStyle="mapbox://styles/mustafabaker/clf808dwr00bt01qkc8rwflyc"
    >
      <Marker longitude={10.4080715} latitude={59.2677363}>
        <MapMarker />
      </Marker>
      <Marker longitude={10.684738} latitude={53.866444}>
        <MapMarker />
      </Marker>
      <Source id="polylineLayer" type="geojson" data={lineData}>
        <Layer
          id="lineLayer"
          type="line"
          layout={{
            "line-join": "round",
            "line-cap": "round",
          }}
          paint={{
            "line-color": "#bf625f",
            "line-width": 8,
          }}
        />
      </Source>
    </Map>
  );
};

export default StagesMap;
