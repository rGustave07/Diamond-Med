import styled from "styled-components";
import {
	FlexColumn,
	borderSoften
} from "../../assets/globalStyingComponents/globalStyle";

export const FlexDiv = styled.div`
	display: flex;
	flex-direction: ${props => props.flexDirect || null};
`;

export const CardContainer = styled.div`
	${FlexColumn}
	${borderSoften}
	background-color: #f3f5f2;
	text-align: center;
	height: 475px;
	width: 350px;
	margin: 1rem;
	overflow: hidden;
`;

export const InformContain = styled.div`
	${FlexColumn}
	padding: 1rem;
`;
