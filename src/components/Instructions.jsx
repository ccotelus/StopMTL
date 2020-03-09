import React from "react";

export const Instructions = props => {
	return (
		<section>
			<h1>Comment contribuer une interpellation</h1>
			<ol>
				<li>
					Cliquez sur le point de la carte où vous avez été interpellé, ou
					entrez une adresse dans la barre de recherche. Votre interpellation
					sera automatiquement relocalisée à l’intersection la plus proche, afin
					de protéger votre anonymat.
				</li>
				<li>
					Dans la fenêtre surgissante, entrez l’année et le mois de votre
					interpellation. Entrez aussi le moment de la journée de votre
					interpellation. Ensuite, entrez votre âge au moment de
					l’interpellation, votre genre, groupe ethnique ou racial et
					orientation sexuelle. Si vous vous identifiez à plus qu’un groupe
					ethnique ou racial, appuyer sur le bouton « ctrl » de votre clavier et
					cliquer sur plusieurs groupes. Vous pouvez n’entrer que les détails
					que vous vous souvenez, ou que vous souhaitez partager.
				</li>
				<li>
					Indiquez si l’interpellation était une forme de contrôle routier,
					c’est-à-dire, si vous étiez dans un véhicule lors de votre
					interpellation (le votre ou celui à quelqu’un d’autre). Par exemple,
					si vous avez été interpellé dû à une manœuvre interdite, ou
					non-conforme.{" "}
				</li>
				<li>
					Indiquez la raison que le membre policier vous a donné pour votre
					interpellation, ou indiquez si vous n’avez pas été donné de raison.
					Indiquez aussi la raison pour laquelle vous pensez avoir été
					interpellé. Ces réponses peuvent être les mêmes, ou différentes.{" "}
				</li>
				<li>
					Indiquez si votre interpellation a mené à un constat d’infraction
					(amende) ou autre sanction (arrestation, mise en accusation).{" "}
				</li>
				<li>
					Remplissez le captcha (une mesure de sécurité pour prévenir le
					pourripostage), et soumettez votre interpellation.{" "}
				</li>
			</ol>
		</section>
	);
};
