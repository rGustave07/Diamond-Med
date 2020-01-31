import React from "react";
import styled from "styled-components";

const Container = props => {
	const Holder = styled.div`
		display: flex;
		flex-direction: ${props.direction || "row"};
		margin: ${props.topMargin || 0} 1rem 1rem 1rem;
	`;
	return <Holder>{props.children}</Holder>;
};

export default Container;
