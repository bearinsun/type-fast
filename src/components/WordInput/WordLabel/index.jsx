import React, { Component } from "react";

export default class WordLabel extends Component {
	render() {
		return (
			<label className="word-input__label" htmlFor={this.props.htmlFor}>
				{this.props.word.split("").map((letter, index) => {
					if (!this.props.typedWord[index]) return letter;

					if (
						this.props.word[0] === this.props.typedWord[0] &&
						letter === this.props.typedWord[index]
					)
						return (
							<mark className="word-input__character word-input__character--right">
								{letter}
							</mark>
						);

					return (
						<span className="word-input__character word-input__character--wrong">
							{letter}
						</span>
					);
				})}
			</label>
		);
	}
}
