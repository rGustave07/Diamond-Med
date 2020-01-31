import styled from "styled-components";
import parallaximg from "../../assets/img/marjanblan-map-unsplash.jpg";

export const HeroContainer = styled.section`
	height: 100vh;
	width: 100%;

	img {
		max-height: 100vh;
		height: 100%;
		width: 100%;
	}

	p {
		place-self: center;
		text-align: center;
		font-weight: 600;
		color: #fff;
		max-width: 33%;
	}
`;

export const CenteredText = styled.h1`
	place-self: center;
	color: #fff;
	font-size: ${props => props.size};
`;

export const HeroButton = styled.button`
	margin: 2rem;
	box-sizing: border-box;
	border: none;
	border-radius: 0.25rem;
	width: 150px;
	place-self: center;
	background-color: #4caf50;
	color: white;
	padding: 15px 32px;
	display: block;
	font-size: 16px;
`;

export const BlackBarSeparator = styled.div`
	width: 100%;
	height: 100px;
	background-color: black;
`;

export const InfoSection = styled.section`
	width: 100%;
	height: 65vh;
	display: flex;

	#bg {
		background-image: url(${parallaximg});
		width: 100%;

		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
`;
