import React, {useState} from "react";
import "./App.scss";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet'
import { ReactComponent as StopMtlLogo } from "../stopmtl-logo.svg";
function App() {
  const defaultRandomPoints = [{"active":true,"lat":45.561216285159894,"lng":-73.57955932617189,"date":"2020-02-04","moment":"matin","age":"14","genre":"homme","groupe_ethnique":"Arabe","orientation_sexuelle":"Gai"},{"active":true,"lat":45.500624918500776,"lng":-73.71482849121095,"date":"2020-02-07","moment":"midi","age":"17","genre":"Ces catégories ne me définissent pas","groupe_ethnique":"Sud-Asiatique","orientation_sexuelle":"Bisexuel(le)"},{"active":true,"lat":45.6371036906098,"lng":-73.56719970703126},{"active":true,"lat":45.54439189762151,"lng":-73.66744995117189},{"active":true,"lat":45.449119091670866,"lng":-73.59260559082033},{"active":true,"lat":45.525157858855565,"lng":-73.48342895507814},{"active":true,"lat":45.59677126585605,"lng":-73.51226806640626}]
  const defaultNewPoint = {
    active:false,
    lat:undefined,
    lng:undefined,
    date:undefined,
    moment:undefined,
    age:undefined,
    genre:undefined,
    groupe_ethnique:undefined,
    orientation_sexuelle:undefined,
}
  const [position, setPosition] = useState([45.53, -73.57]);
  const [mapPoints, setMapPoints] = useState(defaultRandomPoints)
  const [newPoint, setNewPoint] = useState(defaultNewPoint)

  const myIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [15, 41],
    className:'new_point'
});
  const momentDuJour = ['matin','midi','soir'].map(ele => <option value={ele}>{ele}</option>)
  const ageAuMoment = [...Array(87).keys()].map(ele => <option value={ele+12}>{ele+12}</option>)
  const genre = ['femme','homme','Ces catégories ne me définissent pas'].map(ele => <option value={ele}>{ele}</option>)
  const groupeEthnique = ["Noir","Arabe","Autochtone","Sud-Asiatique","Chinois","Philippin","Asiatique du Sud-Est (p. ex., Vietnamien, Cambodgien, Malaisien, Laotien)","Asiatique occidental (p. ex., Iranien, Afghan)","Coréen","Japonais","Latino-Américain","Blanc","Autre – précisez"].map(ele => <option value={ele}>{ele}</option>)
  const orientationSexuelle = ["Hétérosexuel(le)","Gai","Lesbienne","Bisexuel(le)","Ces catégories ne me définissent pas"].map(ele => <option value={ele}>{ele}</option>)
  const listOfMapPoints = mapPoints.map(ele => (<Marker position={[ele.lat, ele.lng]}></Marker>))
    const addMapPoint = event => {
    const {lat, lng} = event.latlng
    
    setNewPoint({...newPoint, lat, lng, active:true})
  }
  const updateMapPoint = event => {
    const {name, value} = event.target
    setNewPoint({...newPoint, [name]:value})
  }

  const saveMapPoint = event => {
    event.preventDefault()

    //Save to mapPointList
    setMapPoints([...mapPoints, newPoint])
    setNewPoint(defaultNewPoint)
  }
  const map = (
    <Map center={position} zoom={11} onClick={addMapPoint}>
      <TileLayer
        attribution='&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {newPoint.active &&
      <Marker position={[newPoint.lat, newPoint.lng]} icon={myIcon}>
        <Popup>
          Nouvelle intervention
        </Popup>
      </Marker>
}
{listOfMapPoints}
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
            <h2>Ajout d'une intervention</h2>
            <form onSubmit={saveMapPoint}>

            <input type="date" name="date" onChange={e => updateMapPoint(e)}/>
            <select name="moment" onChange={e => updateMapPoint(e)}>
              <option value="">Moment de la journée</option>
              {momentDuJour}            </select>
            <select name="age" onChange={e => updateMapPoint(e)}>
            <option value="">Âge</option>

              {ageAuMoment}
            </select>
            <select name="genre" onChange={e => updateMapPoint(e)}>
            <option value="">Genre</option>

              {genre}
            </select>
            <select name="groupe_ethnique" onChange={e => updateMapPoint(e)}>
            <option value="">Groupe ethnique</option>

{groupeEthnique}
            </select>
            <select name="orientation_sexuelle" onChange={e => updateMapPoint(e)}>
            <option value="">Orientation sexuelle</option>

{orientationSexuelle}
            </select>
            <input type="submit"/>
            </form>
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
