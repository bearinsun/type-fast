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
			goalWord: words[Math.floor(Math.random() * words.length)],
			typedWord: ""
		};
		this.state.letterGroups = this.compareGoalToTyped();

		this.updateTypedWord = this.updateTypedWord.bind(this);
		this.changeWord = this.changeWord.bind(this);
		this.compareGoalToTyped = this.compareGoalToTyped.bind(this);
	}

	updateTypedWord(value) {
		this.setState(
			{
				typedWord: value
			},
			() =>
				this.setState({
					letterGroups: this.compareGoalToTyped()
				})
		);
	}

	changeWord() {
		this.setState({
			goalWord: words[Math.floor(Math.random() * words.length)],
			typedWord: ""
		});
	}

	compareGoalToTyped() {
		const typedLetters = this.state.typedWord
			.slice(0, this.state.goalWord.length)
			.split("");

		return typedLetters.reduce((previousLetterGroups, letter, index) => {
			let lastLetterGroup =
				previousLetterGroups[previousLetterGroups.length - 1];
			const isMatching = letter === this.state.goalWord[index];

			if (!lastLetterGroup || lastLetterGroup.isMatching !== isMatching) {
				lastLetterGroup = {
					letters: ""
				};
				previousLetterGroups.push(lastLetterGroup);
			}

			lastLetterGroup.letters += this.state.goalWord[index];
			lastLetterGroup.isMatching = isMatching;

			return previousLetterGroups;
		}, []);
	}

	render() {
		return (
			<fieldset className="word-type">
				<WordLabel
					htmlFor={this.props.id}
					goalWord={this.state.goalWord}
					typedWord={this.state.typedWord}
					letterGroups={this.state.letterGroups}
				/>

				<WordInput
					id={this.props.id}
					goalWord={this.state.goalWord}
					typedWord={this.state.typedWord}
					updateTypedWord={this.updateTypedWord}
					changeWord={this.changeWord}
				/>
			</fieldset>
		);
	}
}
