import React from "react";
import json from "./data/words.json";

import WordType from "./components/WordType";

export default function App(props) {
	return <WordType id="control" words={json.words} />;
}
