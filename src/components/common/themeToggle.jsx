import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import "./styles/themeToggle.css";

const getInitialTheme = () => {
	if (typeof document !== "undefined") {
		const current = document.documentElement.getAttribute("data-theme");
		if (current) return current;
	}
	return "light";
};

const ThemeToggle = () => {
	const [theme, setTheme] = useState(getInitialTheme);

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		try {
			localStorage.setItem("theme", theme);
		} catch (e) {}
	}, [theme]);

	const toggle = () =>
		setTheme((prev) => (prev === "dark" ? "light" : "dark"));

	return (
		<button
			className="theme-toggle"
			onClick={toggle}
			aria-label={
				theme === "dark"
					? "Switch to light mode"
					: "Switch to dark mode"
			}
			title={theme === "dark" ? "Light mode" : "Dark mode"}
		>
			<FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
		</button>
	);
};

export default ThemeToggle;
