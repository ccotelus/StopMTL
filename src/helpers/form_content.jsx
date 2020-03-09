import React from "react";

export const anneeInterpellation = [...Array(20).keys()].map(ele => (
	<option key={ele} value={ele + 2000}>
		{ele + 2000}
	</option>
));
export const moisInterpellation = [...Array(12).keys()].map(ele => (
	<option key={ele} value={ele + 1}>
		{ele + 1}
	</option>
));
export const jourInterpellation = [...Array(31).keys()].map(ele => (
	<option key={ele} value={ele + 1}>
		{ele + 1}
	</option>
));
export const momentDuJour = ["matin", "midi", "soir"].map(ele => (
	<option key={ele} value={ele}>
		{ele}
	</option>
));
export const ageAuMoment = [...Array(87).keys()].map(ele => (
	<option key={ele} value={ele + 12}>
		{ele + 12}
	</option>
));
export const genre = [
	"femme",
	"homme",
	"Ces catégories ne me définissent pas"
].map(ele => (
	<option key={ele} value={ele}>
		{ele}
	</option>
));
export const groupeEthnique = [
	"Noir",
	"Arabe",
	"Autochtone",
	"Sud-Asiatique",
	"Chinois",
	"Philippin",
	"Asiatique du Sud-Est (p. ex., Vietnamien, Cambodgien, Malaisien, Laotien)",
	"Asiatique occidental (p. ex., Iranien, Afghan)",
	"Coréen",
	"Japonais",
	"Latino-Américain",
	"Blanc",
	"Autre – précisez"
].map(ele => (
	<article>
		<label>{ele}</label>
		<input type="checkbox" key={ele} value={ele} name="groupe_ethnique" />
	</article>
));
// export const groupeEthnique = [
//   "Noir",
//   "Arabe",
//   "Autochtone",
//   "Sud-Asiatique",
//   "Chinois",
//   "Philippin",
//   "Asiatique du Sud-Est (p. ex., Vietnamien, Cambodgien, Malaisien, Laotien)",
//   "Asiatique occidental (p. ex., Iranien, Afghan)",
//   "Coréen",
//   "Japonais",
//   "Latino-Américain",
//   "Blanc",
//   "Autre – précisez"
// ].map(ele => (
//   <option key={ele} value={ele}>
//     {ele}
//   </option>
// ));
export const orientationSexuelle = [
	"Hétérosexuel(le)",
	"Gai",
	"Lesbienne",
	"Bisexuel(le)",
	"Ces catégories ne me définissent pas"
].map(ele => (
	<option key={ele} value={ele}>
		{ele}
	</option>
));
