import React, { useEffect, useState } from "react";
import { NavHeader, Logo, NavMenu } from "./NavbarStyling";
import { Link } from "@reach/router";

const Navbar = () => {
	const [scrolledTop, setScrolledTop] = useState(true);

	useEffect(() => {
		window.addEventListener("scroll", e => {
			if (window.scrollY !== 0) {
				setScrolledTop(false);
			} else {
				setScrolledTop(true);
			}

			return () => window.removeEventListener("scroll");
		});
	}, [scrolledTop]);

	return (
		<NavHeader change={scrolledTop}>
			<Logo change={scrolledTop}>
				<h1>Diamond Medical</h1>
			</Logo>
			<NavMenu change={scrolledTop}>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						{/* This will just scroll down to the about section */}
						<a href="/#">About Us</a>
					</li>
					<li>
						{/* <a href="/#">Team</a> */}
						<Link to="/team">Team</Link>
					</li>
					<li>
						<a href="/#">Contact</a>
						{/* <Link to="/team">Contact</Link> */}
					</li>
					<li>
						<a href="/#">Login</a>
						{/* <Link to="/team">Team</Link> */}
					</li>
				</ul>
			</NavMenu>
		</NavHeader>
	);
};

export default Navbar;
