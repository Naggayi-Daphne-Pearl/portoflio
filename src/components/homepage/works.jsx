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
							<img
								src="../icon.png"
								alt="mobiklinic"
								className="work-image"
							/>
							<div className="work-title">
								Digital Products Manager
							</div>
							<div className="work-subtitle">
								MobiKlinic · Full-time
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="../icon.png"
								alt="mobiklinic"
								className="work-image"
							/>
							<div className="work-title">Software Engineer</div>
							<div className="work-subtitle">
								MobiKlinic - Full-time
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>


						<div className="work">
							<img
								src="../Netify Logo.svg"
								alt="mobiklinic"
								className="work-image"
							/>
							<div className="work-title">Web Developer and IT Support</div>
							<div className="work-subtitle">
								Netify - Full-time
							</div>
							<div className="work-duration">Jan 2023 - May 2023</div>
						</div>


						<div className="work">
							<img
								src="../refactory.jpeg"
								alt="refactory"
								className="work-image"
							/>
							<div className="work-title">Front Engineer</div>
							<div className="work-subtitle">
								Refactory - Part-time
							</div>
							<div className="work-duration">2022 - 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
