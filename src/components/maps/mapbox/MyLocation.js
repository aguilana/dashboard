import { Box } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import ReactMapGL, { NavigationControl, GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const MAP_STYLE = "mapbox://styles/aguilawebdev/clda9hdoh007u01mhdkoxp1vi";

const MyLocation = () => {
  const [viewport, setViewport] = useState({});

  // 3 Main St Albany, NY 33333 ====> long and lat coord

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 8,
      })
      console.log("long lat ==> LINE 22------->",viewport);
    });
  },[]);

  return (
    <Box sx={{ height: 600 }}>
        <div style={{color: "white"}}> Long: {viewport.longitude} Lat: {viewport.latitude}</div>
      <ReactMapGL
        mapStyle={MAP_STYLE}
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          longitude: -74,
          latitude: 40.7,
          zoom: 8,
        }}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <NavigationControl />
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </ReactMapGL>
    </Box>
  );
};

export default MyLocation;
