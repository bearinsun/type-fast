import React, { Component } from "react";
import "./index.css";
import Word from "./Word";
import WordInput from "./WordInput";
import WordToggles from "./WordToggles";
import WordToggle from "./WordToggles/WordToggle";

export default class WordType extends Component {
	constructor(props) {
		super(props);
		this.state = {
			spacesAfterWords: false,
			capitalizeWords: false,
			typedWord: ""
		};

		this.state.goalWord = this.determineGoalWord();
		this.state.letterGroups = this.compareGoalToTyped();

		this.wordInput = React.createRef();
	}

	determineGoalWord = () => {
		let goalWord = this.props.words[
			Math.floor(Math.random() * this.props.words.length)
		];

		if (this.state.capitalizeWords && Math.random() < 0.5)
			goalWord = goalWord[0].toUpperCase() + goalWord.slice(1);
		if (this.state.spacesAfterWords) goalWord += " ";

		return goalWord;
	};

	updateTypedWord = value => {
		this.setState({
			typedWord: value,
			letterGroups: this.compareGoalToTyped(this.state.goalWord, value)
		});
	};

	changeGoalWord = () => {
		this.setState({
			goalWord: this.determineGoalWord(),
			typedWord: ""
		});
	};

	compareGoalToTyped = (goal, typed) => {
		goal = goal || this.state.goalWord;
		typed = typed || this.state.typedWord;
		const typedLetters = typed.slice(0, goal.length).split("");

		return typedLetters.reduce((previousLetterGroups, letter, index) => {
			let lastLetterGroup =
				previousLetterGroups[previousLetterGroups.length - 1];
			const isMatching = letter === goal[index];

			if (!lastLetterGroup || lastLetterGroup.isMatching !== isMatching) {
				lastLetterGroup = {
					letters: ""
				};
				previousLetterGroups.push(lastLetterGroup);
			}

			lastLetterGroup.letters += goal[index];
			lastLetterGroup.isMatching = isMatching;

			return previousLetterGroups;
		}, []);
	};

	toggleSpacesAfterWords = event => {
		this.wordInput.current.focus();

		const checked = event.target.checked;
		this.setState({
			spacesAfterWords: checked,
			goalWord: checked
				? this.state.goalWord.concat(" ")
				: this.state.goalWord.trim()
		});
	};

	toggleCapitalizeWords = event => {
		this.wordInput.current.focus();

		const checked = event.target.checked,
			newGoal = checked
				? this.state.goalWord
				: this.state.goalWord.toLowerCase();
		this.setState({
			capitalizeWords: checked,
			goalWord: newGoal,
			letterGroups: checked
				? this.state.letterGroups
				: this.compareGoalToTyped(newGoal, this.state.typedWord)
		});
	};

	render = () => {
		return (
			<fieldset>
				<Word
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
					changeGoalWord={this.changeGoalWord}
					ref={this.wordInput}
				/>

				<WordToggles>
					<WordToggle
						id="spacesAfterWords"
						checked={this.state.spacesAfterWords}
						label="Spaces After Words"
						onChange={this.toggleSpacesAfterWords}
					/>
					<WordToggle
						id="capitalizeWords"
						checked={this.state.capitalizeWords}
						label="Capitalize Random Words"
						onChange={this.toggleCapitalizeWords}
					/>
				</WordToggles>
			</fieldset>
		);
	};
}
