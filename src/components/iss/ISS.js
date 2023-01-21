import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./iss.css"
import L from "leaflet";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const ISS = () => {
  const [details, setDetails] = useState();
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [issPosition, setIssPosition] = useState();


  const markerIcon = new L.Icon({
    iconUrl: require("../../assets/iss-PNG.png"),
    iconSize: [60, 60],
  });



 

  const fetchDetails = async () => {
    const { data } = await axios.get(URL);
    console.log("RESPONSE!", data);
    setDetails(data);
    const { latitude, longitude } = data;
    setLat(Number.parseFloat(latitude).toFixed(2));
    setLong(Number.parseFloat(longitude).toFixed(2));
    setIssPosition([Number.parseFloat(latitude).toFixed(2), Number.parseFloat(longitude).toFixed(2)])

  };

  console.log(details);

  useEffect(() => {
    fetchDetails().then(setIssPosition([lat,long]));
  }, []);



  function LocationMarker() {
    const [position, setPosition] = useState(null);

    // const currMap = useMap()
    // const marker = L.marker([0,0]).addTo(currMap)

    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound() {
        setPosition([lat, long]);
        map.flyTo([lat, long], map.getZoom());
      },
    });

    // marker.setLatLng([lat, long])
    // currMap.setView([lat, long])

    return position === null ? null : (
      <Marker position={position} icon={markerIcon}>
        <Popup>
          ISS IS HERE: <br /> LATITUDE: {lat} <br /> LONGITUDE: {long}
        </Popup>
      </Marker>
    );
  }

  return (
    <div className="dashboard__iss-container">
      <div className="dashboard__iss-heading gradient__text section__padding">
        <h1>WHERE IS THE ISS?!</h1>
        <p>
          latitude: <span>{lat}</span>
        </p>
        <p>
          longitude: <span>{long}</span>
        </p>
      </div>
      <MapContainer
        center={[43,-73]}
        zoom={3}
        className="dashboard__iss-map"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default ISS;
