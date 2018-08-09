import React, { Component } from "react";
import "normalize.css/normalize.css";
import "./App.css";

import WordInput from "./components/WordInput";

class App extends Component {
	render() {
		return <WordInput id="control" />;
	}
}

export default App;
