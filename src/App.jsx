import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

function App() {
  const lang = "fr";
  const position = [45.53, -73.57];
  const map = (
    <Map center={position} zoom={11}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );

  const greeting =
    lang === "fr" ? "Bienvenue sur ce site joyeux" : "Welcome to this site";

  return (
    <div className='App'>
      <h1>StopMTL</h1>
      <h2>{greeting}</h2>
      {map}
    </div>
  );
}

export default App;
