import React, { Component } from "react";
import "./index.css";
import WordLabel from "./WordLabel";
import wordsJson from "../../data/words";

const words = wordsJson.words;

export default class WordInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			word: words[Math.floor(Math.random() * words.length)],
			typedWord: ""
		};
	}

	render() {
		return (
			<fieldset className="word-input">
				<WordLabel
					htmlFor={this.props.id}
					word={this.state.word}
					typedWord={this.state.typedWord}
				/>
				<input
					id={this.props.id}
					className="word-input__input"
					value={this.state.typedWord}
					onChange={event => {
						if (event.target.value !== this.state.word) {
							this.setState({
								typedWord: event.target.value
							});
							return;
						}

						this.setState({
							word:
								words[Math.floor(Math.random() * words.length)],
							typedWord: ""
						});
					}}
				/>
			</fieldset>
		);
	}
}
