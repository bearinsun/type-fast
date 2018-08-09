import React, { Component } from "react";

export default class WordLabel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			letters: this.props.word.split("")
		};
	}

	computePartials() {
		return this.props.word
			.split("")
			.reduce((previousPartials, letter, index) => {
				let lastPartial = previousPartials[previousPartials.length - 1];
				const isTyped = this.props.typedWord[index] !== undefined,
					isCorrect =
						this.props.word[0] === this.props.typedWord[0] &&
						letter === this.props.typedWord[index];

				if (
					!lastPartial ||
					lastPartial.isTyped !== isTyped ||
					lastPartial.isCorrect !== isCorrect
				) {
					lastPartial = {
						letters: "",
						isTyped: this.props.typedWord[index] !== undefined
					};
					previousPartials.push(lastPartial);
				}

				lastPartial.letters += letter;

				lastPartial.isCorrect = isCorrect;

				return previousPartials;
			}, []);
	}

	render() {
		return (
			<label className="word-type__label" htmlFor={this.props.htmlFor}>
				{this.computePartials().map((partial, index) => {
					if (!partial.isTyped) return partial.letters;

					let className = "word-type__letters word-type__letters--";
					className += partial.isCorrect ? "correct" : "incorrect";

					return (
						<mark className={className} key={index}>
							{partial.letters}
						</mark>
					);
				})}
			</label>
		);
	}
}
