import React from "react";
import { CardContainer, InformContain } from "./CardStyling";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = props => {
	return (
		<>
			<CardContainer>
				{props.picture ? (
					<LazyLoadImage
						placeholderSrc={props.preview}
						src={props.picture}
						effect="blur"
						height={props.height}
					/>
				) : null}
				<InformContain>
					<h1>{props.heading}</h1>
					<p>{props.ptag}</p>
				</InformContain>
			</CardContainer>
		</>
	);
};

export default Card;
