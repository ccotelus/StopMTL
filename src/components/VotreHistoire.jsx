import React from "react";

export const VotreHistoire = props => {
	return (
		<section id="partagez">
			<h1>Partagez votre histoire</h1>
			<p>
				Si vous avez vécu une interpellation policière à Montréal, cette page
				est disponible pour partager votre histoire anonyme. Veuillez cliquer
				ici pour raconter votre histoire. Si vous sentez que vous avez besoin de
				soutien ou de ressources, veuillez cliquer ici. Les histoires sont
				modérées pour empêcher la publication de pourripostage (spam), il peut
				donc s'écouler un certain temps avant que votre histoire apparaisse sur
				cette page.
			</p>
			<form>
				<h1>Votre histoire</h1>
				<textarea name="" id="" cols="30" rows="10"></textarea>
			</form>
			<main>
				<h1>Les histoires</h1>
				<article>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
						quas harum voluptatibus reprehenderit fugit est at nisi voluptas
						distinctio suscipit iusto totam repellendus earum eaque cum, ad
						porro. Obcaecati, iure.
					</p>
					<p>Publié le 12 octobre 2034</p>
				</article>
			</main>
		</section>
	);
};
