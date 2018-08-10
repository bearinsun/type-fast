import React, { Component } from "react";
import "normalize.css/normalize.css";
import "./App.css";
import json from "./data/words.json";

import WordType from "./components/WordType";

class App extends Component {
	render() {
		return <WordType id="control" words={json.words} />;
	}
}

export default App;
