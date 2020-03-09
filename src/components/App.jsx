import React, { useState, useEffect } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";

import { InterventionForm } from "./InterventionForm";
import { AddressForm } from "./AddressForm";
import { Header } from "./Header";
import { About } from "./About";
import { Instructions } from "./Instructions";
import { Methodologie } from "./Methodologie";
import { VotreHistoire } from "./VotreHistoire";
import { Ressources } from "./Ressources";

function App() {
	const defaultRandomPoints = [
		{
			active: true,
			lat: 45.561216285159894,
			lng: -73.57955932617189,
			date: "2020-02-04",
			moment: "matin",
			age: "14",
			genre: "homme",
			groupe_ethnique: "Arabe",
			orientation_sexuelle: "Gai"
		},
		{
			active: true,
			lat: 45.500624918500776,
			lng: -73.71482849121095,
			date: "2020-02-07",
			moment: "midi",
			age: "17",
			genre: "Ces catégories ne me définissent pas",
			groupe_ethnique: "Sud-Asiatique",
			orientation_sexuelle: "Bisexuel(le)"
		},
		{ active: true, lat: 45.6371036906098, lng: -73.56719970703126 },
		{ active: true, lat: 45.54439189762151, lng: -73.66744995117189 },
		{ active: true, lat: 45.449119091670866, lng: -73.59260559082033 },
		{ active: true, lat: 45.525157858855565, lng: -73.48342895507814 },
		{ active: true, lat: 45.59677126585605, lng: -73.51226806640626 }
	];
	const defaultNewPoint = {
		active: false,
		lat: undefined,
		lng: undefined,
		date: undefined,
		annee: undefined,
		mois: undefined,
		jour: undefined,
		moment: undefined,
		age: undefined,
		genre: undefined,
		groupe_ethnique: undefined,
		orientation_sexuelle: undefined,
		captcha: false
	};
	const [position, setPosition] = useState([45.53, -73.7]);
	const [mapPoints, setMapPoints] = useState(defaultRandomPoints);
	const [newPoint, setNewPoint] = useState(defaultNewPoint);
	const [addressSearch, setAddressSearch] = useState("");
	const [addressList, setAddressList] = useState([]);
	const [addressListBuffer, setAddressListBuffer] = useState({
		loading: false,
		length: 0,
		found: false
	});
	const recaptchaRef = React.createRef();

	const myIcon = L.icon({
		iconUrl: "https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png",
		iconSize: [25, 41],
		iconAnchor: [15, 41],
		className: "new_point"
	});

	const listOfMapPoints = mapPoints.map((ele, index) => (
		<Marker key={index} position={[ele.lat, ele.lng]}>
			<Popup>
				<span>Intervention</span>
				<ul>
					<li>Quand : {ele.date}</li>
					<li>
						Qui : {ele.groupe_ethnique}, {ele.orientation_sexuelle}
					</li>
					<li>Âge : {ele.age}</li>
				</ul>
			</Popup>
		</Marker>
	));
	const addMapPoint = event => {
		const { lat, lng } = event.latlng;

		setNewPoint({ ...newPoint, lat, lng, active: true });
	};
	const updateMapPoint = event => {
		const { name, value } = event.target;
		setNewPoint({ ...newPoint, [name]: value });
	};

	const saveMapPoint = event => {
		event.preventDefault();
		const recaptchaValue = recaptchaRef.current.getValue();
		console.log(recaptchaValue);
		//Save to mapPointList
		if (newPoint.captcha) {
			setMapPoints([...mapPoints, newPoint]);
			setNewPoint(defaultNewPoint);
		}
	};

	const findLatLong = address => {
		fetch(
			`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_TOKEN}&q=${address}&format=json`
		)
			.then(response => {
				return response.json();
			})
			.then(myJson => {
				if (Array.isArray(myJson)) {
					const [{ lat, lon }] = myJson;
					if (lat && lon) {
						setNewPoint(newPoint => ({
							...newPoint,
							active: true,
							lat: lat,
							lng: lon
						}));
					}
				}
			});
	};

	const completeAddress = address => {
		if (
			Math.abs(addressSearch.length - addressListBuffer.length) > 2 &&
			!addressListBuffer.loading &&
			!newPoint.active &&
			!addressListBuffer.found
		) {
			setAddressListBuffer({ loading: true, length: addressSearch.length });
			fetch(
				`https://us1.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_TOKEN}&q=${address}&limit=5&format=json&viewbox=-73.996302,45.381525,-73.416581,45.766331&bounded=1`
			)
				.then(response => {
					return response.json();
				})
				.then(myJson => {
					if (Array.isArray(myJson)) {
						const addressList = myJson.map(ele => ({
							lat: ele.lat,
							lng: ele.lon,
							address: ele.display_address
						}));
						console.log(addressSearch, myJson);
						setAddressList(addressList);
						setTimeout(
							() => setAddressListBuffer(prev => ({ ...prev, loading: false })),
							2000
						);
					}
				});
		}
	};

	useEffect(() => {
		completeAddress(addressSearch);
	}, [addressSearch]);

	const map = (
		<Map
			center={position}
			zoom={11}
			onClick={addMapPoint}
			scrollWheelZoom={newPoint.active}
		>
			<TileLayer
				attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				// url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png"
			/>
			{newPoint.active && (
				<Marker position={[newPoint.lat, newPoint.lng]} icon={myIcon}>
					<Popup>
						<span>
							A pretty CSS3 popup. <br /> Easily customizable.
						</span>
					</Popup>
				</Marker>
			)}
			{listOfMapPoints}
		</Map>
	);

	return (
		<Router>
			<div className="App">
				<Header />
				<main>
					<section className="map">
						{map}
						<AddressForm
							{...{
								findLatLong,
								setAddressSearch,
								addressSearch,
								addressList,
								setAddressList,
								setAddressListBuffer
							}}
						/>
						{newPoint.active && (
							<InterventionForm
								{...{
									recaptchaRef,
									updateMapPoint,
									saveMapPoint,
									setNewPoint,
									setAddressSearch,
									newPoint,
									defaultNewPoint
								}}
							/>
						)}
					</section>
					<Switch>
						<Route path="/partagez">
							<VotreHistoire />
						</Route>
						<Route path="/methodologie">
							<Methodologie />
						</Route>
						<Route path="/ressources">
							<Ressources />
						</Route>
						<Route path="/">
							<About />
							<Instructions />
						</Route>
					</Switch>
				</main>
			</div>
		</Router>
	);
}

export default App;
