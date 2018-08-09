import React, { Component } from "react";
import "./index.css";
import WordLabel from "./WordLabel";
import WordInput from "./WordInput";
import wordsJson from "../../data/words";

const words = wordsJson.words;

export default class WordType extends Component {
	constructor(props) {
		super(props);
		this.state = {
			word: words[Math.floor(Math.random() * words.length)],
			typedWord: ""
		};

		this.updateTypedWord = this.updateTypedWord.bind(this);
		this.changeWord = this.changeWord.bind(this);
	}

	updateTypedWord(value) {
		this.setState({
			typedWord: value
		});
	}

	changeWord() {
		this.setState({
			word: words[Math.floor(Math.random() * words.length)],
			typedWord: ""
		});
	}

	render() {
		return (
			<fieldset className="word-type">
				<WordLabel
					htmlFor={this.props.id}
					word={this.state.word}
					typedWord={this.state.typedWord}
				/>

				<WordInput
					id={this.props.id}
					word={this.state.word}
					typedWord={this.state.typedWord}
					updateTypedWord={this.updateTypedWord}
					changeWord={this.changeWord}
				/>
			</fieldset>
		);
	}
}
