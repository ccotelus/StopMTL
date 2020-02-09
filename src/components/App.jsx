import React, {useState} from "react";
import "./App.scss";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { ReactComponent as StopMtlLogo } from "../stopmtl-logo.svg";

function App() {
  const [position, setPosition] = useState([45.53, -73.57]);
  const [mapPoints, setMapPoints] = useState([])
  const [newPoint, setNewPoint] = useState({
      active:false,
      lat:undefined,
      lng:undefined,
      date:undefined,
      moment:undefined,
      age:undefined,
      genre:undefined,
      groupe_ethnique:undefined,
      orientation_sexuelle:undefined,
  })
  
  const momentDuJour = ['matin','midi','soir'].map(ele => <option value={ele}>{ele}</option>)
  const ageAuMoment = [...Array(87).keys()].map(ele => <option value={ele+12}>{ele+12}</option>)
  const genre = ['femme','homme','Ces catégories ne me définissent pas'].map(ele => <option value={ele}>{ele}</option>)
  const groupeEthnique = ["Noir","Arabe","Autochtone","Sud-Asiatique","Chinois","Philippin","Asiatique du Sud-Est (p. ex., Vietnamien, Cambodgien, Malaisien, Laotien)","Asiatique occidental (p. ex., Iranien, Afghan)","Coréen","Japonais","Latino-Américain","Blanc","Autre – précisez"].map(ele => <option value={ele}>{ele}</option>)
  const orientationSexuelle = ["Hétérosexuel(le)","Gai","Lesbienne","Bisexuel(le)","Ces catégories ne me définissent pas"].map(ele => <option value={ele}>{ele}</option>)

    const addMapPoint = event => {
    const {lat, lng} = event.latlng
    
    setNewPoint({...newPoint, lat, lng, active:true})
  }
  const updateMapPoint = event => {
    const {name, value} = event.target
    setNewPoint({...newPoint, [name]:value})
  }

  const saveMapPoint = () => {
    //Save to mapPointList
  }
  const map = (
    <Map center={position} zoom={11} onClick={addMapPoint}>
      <TileLayer
        attribution='&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {newPoint.active &&
      <Marker position={[newPoint.lat, newPoint.lng]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
}
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
        <section className="map">
        {map}
        {newPoint.active && (
          <div className="question_form">
            <input type="date" name="date" onChange={e => updateMapPoint(e)}/>
            <select name="moment" onChange={e => updateMapPoint(e)}>{momentDuJour}            </select>
            <select name="age" onChange={e => updateMapPoint(e)}>
              {ageAuMoment}
            </select>
            <select name="genre" onChange={e => updateMapPoint(e)}>
              {genre}
            </select>
            <select name="groupe_ethnique" onChange={e => updateMapPoint(e)}>
{groupeEthnique}
            </select>
            <select name="orientation_sexuelle" onChange={e => updateMapPoint(e)}>
{orientationSexuelle}
            </select>
          </div>
        )}
          </section>
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
