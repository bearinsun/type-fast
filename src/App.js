import React, { Component } from "react";
import "normalize.css/normalize.css";
import "./App.css";

import WordType from "./components/WordType";

class App extends Component {
	render() {
		return <WordType id="control" />;
	}
}

export default App;
