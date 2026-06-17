import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowUpRightFromSquare,
	faBolt,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { title, description, linkText, link, tags, metric } = props;

	const hasLink = link && link !== "#";

	const inner = (
		<div className="project-container">
			<div className="project-title">{title}</div>
			<div className="project-description">{description}</div>

			{metric && (
				<div className="project-metric">
					<FontAwesomeIcon icon={faBolt} />
					<span>{metric}</span>
				</div>
			)}

			{tags && tags.length > 0 && (
				<div className="project-tags">
					{tags.map((tag) => (
						<span className="project-tag" key={tag}>
							{tag}
						</span>
					))}
				</div>
			)}

			{hasLink && (
				<div className="project-link">
					<div className="project-link-text">{linkText}</div>
					<div className="project-link-icon">
						<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
					</div>
				</div>
			)}
		</div>
	);

	return (
		<div className={hasLink ? "project" : "project project-static"}>
			{hasLink ? (
				<a href={link} target="_blank" rel="noreferrer">
					{inner}
				</a>
			) : (
				inner
			)}
		</div>
	);
};

export default Project;
