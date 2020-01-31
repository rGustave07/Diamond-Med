import styled from "styled-components";
import {
	FlexRow,
	centercontentjustification
} from "../../assets/globalStyingComponents/globalStyle";
import { Logo } from "../Navigation/NavbarStyling";

export const FooterContainer = styled.footer`
	${FlexRow}
	${centercontentjustification}

    background-color: #363636;
	color: white;
	width: 100%;
	height: 300px;
`;

export const FootSection = styled.div`
	max-width: 40%;
	margin: 0 2rem;
	width: ${props => props.width || `15%`};
	height: 250px;
	${Logo} {
		margin-left: 0;
	}

	h1 {
		margin: 0;
	}

	p {
		font-size: 14px;
		line-height: 24px;
	}
`;
