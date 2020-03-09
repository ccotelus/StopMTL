import React from "react";
import {
	anneeInterpellation,
	moisInterpellation,
	momentDuJour,
	ageAuMoment,
	genre,
	groupeEthnique,
	orientationSexuelle
} from "../helpers/form_content";
import ReCAPTCHA from "react-google-recaptcha";
import ScrollArea from "react-scrollbar";

export const InterventionForm = props => {
	const {
		recaptchaRef,
		updateMapPoint,
		saveMapPoint,
		setNewPoint,
		setAddressSearch,
		defaultNewPoint,
		newPoint
	} = props;
	return (
		<div className="question_form">
			<ScrollArea
				speed={0.8}
				className="area"
				contentClassName=""
				horizontal={false}
			>
				<h2>Ajout d'une intervention</h2>
				<h3>Veuillez entrer les informations au moment de l'intervention</h3>
				<form onSubmit={saveMapPoint}>
					{/* <input type="date" name="date" onChange={e => updateMapPoint(e)}/> */}
					<select name="annee" onChange={e => updateMapPoint(e)}>
						<option value="">Année au moment de l'intervention</option>
						{anneeInterpellation}
					</select>
					<select name="mois" onChange={e => updateMapPoint(e)}>
						<option value="">Mois au moment de l'intervention</option>
						{moisInterpellation}
					</select>
					<select name="moment" onChange={e => updateMapPoint(e)}>
						<option value="">Moment de la journée</option>
						{momentDuJour}{" "}
					</select>
					<select name="age" onChange={e => updateMapPoint(e)}>
						<option value="">Âge</option>

						{ageAuMoment}
					</select>
					<select name="genre" onChange={e => updateMapPoint(e)}>
						<option value="">Genre</option>

						{genre}
					</select>
					{/* <select
					name="groupe_ethnique"
					onChange={e => updateMapPoint(e)}
					multiple
				>
					<option value="">Groupe ethnique</option>

					{groupeEthnique}
				</select> */}
					<select name="orientation_sexuelle" onChange={e => updateMapPoint(e)}>
						<option value="">Orientation sexuelle</option>

						{orientationSexuelle}
					</select>
					<select name="controle_routier" onChange={e => updateMapPoint(e)}>
						<option value="">Controle Routier</option>
					</select>
					<select name="raison_arret" onChange={e => updateMapPoint(e)}>
						<option value="">Raison de l'arrêt</option>
					</select>
					<select name="ressenti_arret" onChange={e => updateMapPoint(e)}>
						<option value="">Ressenti de l'arrêt</option>
					</select>
					<div className="checkbox">
						<h1>Groupe Ethnique</h1>
						<div>{groupeEthnique}</div>
					</div>
					<ReCAPTCHA
						ref={recaptchaRef}
						sitekey="6LcpSdcUAAAAAA0J49ouiciAj5CBqlHVlITUTnrx"
						onChange={() => setNewPoint({ ...newPoint, captcha: true })}
						className="captcha"
					/>
					<div>
						<input type="submit" />
						<input
							type="reset"
							onClick={() => {
								setNewPoint(defaultNewPoint);
								setAddressSearch("");
							}}
						/>
					</div>
				</form>
			</ScrollArea>
		</div>
	);
};
