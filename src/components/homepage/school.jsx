import React from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Schools = () => {
	return (
		<div className="works">
			<Card
				icon={faGraduationCap}
				title="Learning & growth"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-info">
								<div className="work-title">
									BSc in Computer Science
								</div>
								<div className="work-subtitle">
									Makerere University
								</div>
							</div>
						</div>

						<div className="work">
							<div className="work-info">
								<div className="work-title">
									Diploma in Machine Learning
								</div>
								<div className="work-subtitle">Alison</div>
								<div className="work-duration">2025</div>
							</div>
						</div>

						<div className="work">
							<div className="work-info">
								<div className="work-title">
									Certificate in Software Engineering
								</div>
								<div className="work-subtitle">
									Refactory Uganda
								</div>
							</div>
						</div>

						

						<div className="work">
							<div className="work-info">
								<div className="work-title">
									Certificate in Data Protection Training
								</div>
								<div className="work-subtitle">Tecno Legal</div>
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Schools;
