import React from "react";
import { Router } from "@reach/router";
import Home from "./containers/Home/Home";
import Team from "./containers/Team/Team";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Home path="/" />
				<Team path="team" />
			</Router>
		</div>
	);
}

export default App;
