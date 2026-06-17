import React from "react";
import { Link } from "react-router-dom";

import "./styles/logo.css";

const Logo = (props) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const size = width || 46;

	const monogram = (
		<div
			className="logo"
			style={{
				width: size,
				height: size,
				fontSize: Math.round(size * 0.38),
			}}
			aria-label="Naggayi Daphne Pearl"
		>
			DN
		</div>
	);

	return (
		<React.Fragment>
			{link ? <Link to="/">{monogram}</Link> : monogram}
		</React.Fragment>
	);
};

export default Logo;
