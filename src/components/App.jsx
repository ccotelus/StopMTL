import React from "react";
import "./App.scss";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { ReactComponent as StopMtlLogo } from "../stopmtl-logo.svg";

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

  return (
    <div className='App'>
      <header>
        <StopMtlLogo />
        <ul>
          <li>
            <a href='#'>À Propos</a>
          </li>
          <li>
            <a href='#'>Confidentialité</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </header>
      <main>
        {map}
        <section className='about'>
          <h2>Qu'est-ce que StopMTL ?</h2>
          <p>
            Explication du projet Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Delectus provident explicabo aliquid fugit eveniet
            eum id exercitationem architecto! Eos, ipsam sapiente. Cupiditate
            numquam hic voluptatibus facere aliquam id aspernatur. Autem?
          </p>
          <p>
            Explication du projet Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Delectus provident explicabo aliquid fugit eveniet
            eum id exercitationem architecto! Eos, ipsam sapiente. Cupiditate
            numquam hic voluptatibus facere aliquam id aspernatur. Autem?
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
