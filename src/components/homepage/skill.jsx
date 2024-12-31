import React from "react";
import { faBriefcase, faSchool } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/article.css";

const Skills = () => {
	return (
		<div className="homepage-article">
			<div className="skills-body">
				<div className="skills-section">
					<h3>Technical Skills</h3>
					<ul>
						<li>Python - (Django, Flask)</li>
						<li>Google Cloud Platform</li>

						<li>JavaScript- (React, React Native, Next Js)</li>
						<li>Cross-platform Mobile Development</li>
						<li>Data Structures and Algorithms</li>
						<li>Test Driven Development</li>
					</ul>
				</div>
				<div className="skills-section">
					<h3>Soft Skills</h3>
					<ul>
						<li>Critical Thinking Skills</li>
						<li>Agile Methodology</li>
						<li>Project Management</li>
						<li>Social Media Marketing</li>
						<li>Team Work</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Skills;
