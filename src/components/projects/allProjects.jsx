import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = (props) => {
	const { featuredOnly } = props;

	const projects = featuredOnly
		? INFO.projects.filter((project) => project.featured)
		: INFO.projects;

	return (
		<div className="all-projects-container">
			{projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						title={project.title}
						description={project.description}
						metric={project.metric}
						tags={project.tags}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
