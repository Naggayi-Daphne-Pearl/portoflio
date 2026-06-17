import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { title, description, linkText, link } = props;

	return (
		<div className="project">
			<a href={link} target="_blank" rel="noreferrer">
				<div className="project-container">
					<div className="project-title">{title}</div>
					<div className="project-description">{description}</div>
					<div className="project-link">
						<div className="project-link-text">{linkText}</div>
						<div className="project-link-icon">
							<FontAwesomeIcon
								icon={faArrowUpRightFromSquare}
							/>
						</div>
					</div>
				</div>
			</a>
		</div>
	);
};

export default Project;
