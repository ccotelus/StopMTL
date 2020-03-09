import React from "react";
import { ReactComponent as StopMtlLogo } from "../stopmtl-logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
// import { Link as RouterLink } from "react-router-dom";
import { NavHashLink as RouterLink } from "react-router-hash-link";

export const Header = props => {
	return (
		<header>
			<StopMtlLogo />
			<ul>
				<li>
					<RouterLink to="/#about" smooth={true}>
						À propos
					</RouterLink>
				</li>
				<li>
					<RouterLink to="/methodologie#methodologie" smooth={true}>
						Méthodologie
					</RouterLink>
				</li>
				<li>
					<RouterLink to="/ressources#ressources" smooth={true}>
						Ressources
					</RouterLink>
				</li>
				<li>
					<RouterLink to="/partagez#partagez" smooth={true}>
						Partagez votre histoire
					</RouterLink>
				</li>
			</ul>
		</header>
	);
};
