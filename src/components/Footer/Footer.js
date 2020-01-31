import React from "react";
import { FooterContainer, FootSection } from "./FooterStyling";
import { Logo } from "../Navigation/NavbarStyling";

const Footer = () => {
	return (
		<FooterContainer>
			<FootSection width="15%">
				<Logo>
					<h1>Diamond</h1>
				</Logo>
				<p>
					Diamond Medical Management is a company dedicated to helping
					others. With over two decades in the business, our
					experience will put you at ease as we navigate the
					complexities of workers comp.
				</p>
			</FootSection>
			<FootSection width="20%">
				<h1>Contact Us</h1>
				<p>5555 N. Big Dick Ln,</p>
				<p>p: 714-555-6969</p>
				<p>f: 714-555-6960</p>
			</FootSection>
			<FootSection width="35%">
				<h1>Find us on social Media</h1>
				{/* Social Media SVGs */}
			</FootSection>
		</FooterContainer>
	);
};

export default Footer;
