import React from "react";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/skill.css";

const technicalSkills = [
	"Next.js & TypeScript",
	"React",
	"React Native",
	"Flutter & Dart",
	"Angular",
	"Node.js",
	"Laravel (PHP)",
	"Django (Python)",
	"Java",
	"REST APIs & GraphQL",
	"PostgreSQL / MySQL",
	"Prisma & Drizzle ORM",
	"Docker",
	"AWS (Lambda, S3)",
	"CI/CD — GitHub Actions",
];

const softSkills = [
	"System Design",
	"Agile / Scrum",
	"Test-Driven Development",
	"Technical Documentation",
	"Problem-Solving",
	"Cross-Functional Teamwork",
];

const Skills = () => {
	return (
		<Card
			icon={faCode}
			title="What I work with"
			body={
				<div className="skills-body">
					<div className="skills-section">
						<h3>Tools &amp; tech</h3>
						<div className="skills-badges">
							{technicalSkills.map((skill) => (
								<span className="skill-badge" key={skill}>
									{skill}
								</span>
							))}
						</div>
					</div>
					<div className="skills-section">
						<h3>How I work</h3>
						<div className="skills-badges">
							{softSkills.map((skill) => (
								<span className="skill-badge" key={skill}>
									{skill}
								</span>
							))}
						</div>
					</div>
				</div>
			}
		/>
	);
};

export default Skills;
