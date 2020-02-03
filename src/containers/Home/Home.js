import React from "react";
import heropictureload from "../../assets/img/luis-melendez-unsplash_20x20.jpg";
import heropicture from "../../assets/img/luis-melendez-unsplash.jpg";
import Navbar from "../../components/Navigation/Navbar";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import "react-lazy-load-image-component/src/effects/blur.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import missionPicture from "../../assets/img/david-iskander-mission-unsplash.jpg";
import missionPictureLoad from "../../assets/img/preview_images/david-iskander-mission-unsplash_20x20.jpg";
import visionPicture from "../../assets/img/john-towner-vision-unsplash.jpg";
import visionPictureLoad from "../../assets/img/preview_images/john-towner-vision-unsplash_20x20.jpg";
import planPicture from "../../assets/img/hanna-morris-plan-unsplash.jpg";
import planPictureLoad from "../../assets/img/preview_images/hanna-morris-plan-unsplash_20x20.jpg";
import content from "../../util/cardcontent";

import {
	Overlay,
	AbsoluteContainer
} from "../../assets/globalStyingComponents/globalStyle";
import {
	HeroContainer,
	CenteredText,
	HeroButton,
	BlackBarSeparator,
	InfoSection
} from "./HomeStyling";

const Home = () => {
	return (
		<>
			{/* Heading /Navbar */}
			<Navbar />

			{/* Hero / Intro Section */}
			<HeroContainer>
				<Overlay />
				<AbsoluteContainer top="0">
					<CenteredText size="45px">
						Medical Professionals
					</CenteredText>
					<p>
						A group dedicated to ensuring proper care and treatment
						for you and your loved ones{" "}
					</p>
					<HeroButton>Start</HeroButton>
				</AbsoluteContainer>
				<LazyLoadImage
					src={heropicture}
					placeholderSrc={heropictureload}
					effect="blur"
					height="100vh"
				/>
			</HeroContainer>

			{/* Content Section */}
			<BlackBarSeparator />
			<InfoSection>
				<div id="bg">
					<AbsoluteContainer
						height="65%"
						direct="row"
						opacityContainer={true}
					/>
					<AbsoluteContainer
						height="65%"
						direct="row"
						spaceEven={true}>
						<Card
							preview={missionPictureLoad}
							picture={missionPicture}
							height="235px"
							heading={content.missionCard.heading}
							ptag={content.missionCard.ptag}
						/>
						<Card
							preview={visionPictureLoad}
							picture={visionPicture}
							height="235px"
							heading={content.visionCard.heading}
							ptag={content.visionCard.ptag}
						/>
						<Card
							preview={planPictureLoad}
							picture={planPicture}
							height="235px"
							heading={content.planCard.heading}
							ptag={content.planCard.ptag}
						/>
					</AbsoluteContainer>
				</div>
			</InfoSection>

			{/* Footer  Section */}
			<BlackBarSeparator />
			<Footer />
		</>
	);
};

export default Home;
