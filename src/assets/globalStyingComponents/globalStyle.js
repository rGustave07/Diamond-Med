import styled, { css } from "styled-components";

export const Overlay = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
	width: 100%;
	height 100%;
	top: 0;
	left: 0;
	background: black;
    opacity: .7;
    z-index: 5;
`;

export const centercontentjustification = css`
	justify-content: center;
	align-items: center;
`;

export const AbsoluteContainer = styled.div`
	${centercontentjustification}
	${props => {
		if (props.opacityContainer) {
			return css`
				background-color: white;
				opacity: 0.3;
			`;
		}
	}}
	${props =>
		props.spaceEven
			? css`
					justify-content: space-evenly;
			  `
			: null}
	position: absolute;
	display: flex;
	flex-direction: ${props => props.direct || "column"};
	width: 100%;
	height: ${props => props.height || "100%"};
	top: ${props => props.top || null};
	left: 0;
	z-index: 6;
`;

export const FlexColumn = css`
	display: flex;
	flex-direction: column;
`;

export const FlexRow = css`
	display: flex;
	flex-direction: row;
`;

export const absolutePosition = css`
	position: absolute;
`;

export const borderSoften = css`
	border-radius: 1rem;
`;
