import React from "react";
import styled from "styled-components";

import { Overlay } from "../../assets/globalStyingComponents/globalStyle";
import NavBar from "../../components/Navigation/Navbar";
import Container from "../../components/Container/Container";

const HeadText = styled.h1`
	font-size: 36px;
	color: green;
`;

const Team = () => {
	return (
		<React.Fragment>
			<NavBar />
			<Overlay />
			<Container topMargin="7%">
				<HeadText>Team Page</HeadText>
			</Container>
		</React.Fragment>
	);
};

export default Team;
