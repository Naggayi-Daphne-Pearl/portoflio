import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-info">
								<div className="work-title">
									Full-Stack Developer
								</div>
								<div className="work-subtitle">
									Kanzu Finance · Full-time
								</div>
								<div className="work-duration">
									May 2025 - Present
								</div>
							</div>
						</div>

						<div className="work">
							<div className="work-info">
								<div className="work-title">
									Senior Software Engineer
								</div>
								<div className="work-subtitle">
									Profile Zone · Remote
								</div>
								<div className="work-duration">
									Nov 2025 - Present
								</div>
							</div>
						</div>

						<div className="work">
							<div className="work-info">
								<div className="work-title">
									Software Engineer & Digital Products Manager
								</div>
								<div className="work-subtitle">
									MobiKlinic · Full-time
								</div>
								<div className="work-duration">
									May 2023 - May 2025
								</div>
							</div>
						</div>

						<div className="work">
							<div className="work-info">
								<div className="work-title">
									Open Source Developer
								</div>
								<div className="work-subtitle">
									OpenTelemetry
								</div>
								<div className="work-duration">
									Oct 2024 - Dec 2024
								</div>
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
