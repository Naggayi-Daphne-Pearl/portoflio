import React from "react";
import { faBriefcase, faSchool } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/article.css";

const Schools = () => {
	return (
		<div className="homepage-article">
			<div className="works-body">
				<div className="work">
					<img
						src="../refactory.jpeg"
						alt="refactory"
						className="work-image"
					/>
					<div className="homepage-article-title">
						Certificate in Software Engineer
					</div>
					<div className="work-subtitle">Refactory</div>
					{/* <div className="work-duration">2022 - 2023</div> */}
				</div>

				<div className="work">
					<img
						src="../makerere-logo.jpeg"
						alt="makerere"
						className="work-image"
					/>
					<div className="homepage-article-title">
						Cisco Certified Networking Associate CCNA
					</div>
					<div className="work-subtitle">Makerere University</div>
				</div>

				<div className="work">
					<img
						src="../makerere-logo.jpeg"
						alt="refactory"
						className="work-image"
					/>
					<div className="homepage-article-title">
						Bachelor in Science in Computer Science
					</div>
					<div className="work-subtitle">Makerere University</div>
				</div>

				<div className="work">
					{/* <img
								src="../makerere-logo.jpeg"
								alt="refactory"
								className="work-image"
							/> */}
					<div className="homepage-article-title">
						Certificate in Data Protection Training{" "}
					</div>
					<div className="work-subtitle">Tecno Legal </div>
				</div>
			</div>
		</div>
	);
};

export default Schools;
