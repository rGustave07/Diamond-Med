import styled, { css } from "styled-components";

export const NavHeader = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 30px 0;
	position: fixed;
	height: 92px;
	top: 0;
	right: 0;
	left: 0;
	background: transparent;
	transition: 1s;
	z-index: 10;
	${props =>
		props.change ||
		css`
			background: black;
			color: white;
			height: 70px;
			padding: 18px 0;
		`}
`;

export const Logo = styled.div`
	line-height: 1;
	border-left: 4px solid #18d26e;
	border-bottom: 2px solid #18d26e;
	margin-left: 2rem;
	transition: 0.5s;

	h1 {
		margin: 0;
		color: white;
	}

	${props =>
		props.change ||
		css`
			color: white;
		`}
`;

export const NavMenu = styled.nav`
	display: flex;
	flex-direction: row;

	ul {
		display: inherit;
		list-style: none;
		margin: 0 1rem;
		padding: 0;

		li {
			padding: 0.5rem 1rem;

			a {
				display: block;
				text-decoration: none;
				color: white;
				font-weight: 700;
				text-transform: uppercase;
				transition: all 1s;
			}
		}
	}
`;
