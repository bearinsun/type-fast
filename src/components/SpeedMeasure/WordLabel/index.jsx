import React, { Component } from "react";

export default class WordLabel extends Component {
	render() {
		return (
			<label
				className="speed-measure__label"
				htmlFor={this.props.htmlFor}
			>
				{this.props.word.split("").map((letter, index) => {
					if (!this.props.typedWord[index]) return letter;

					if (
						this.props.word[0] === this.props.typedWord[0] &&
						letter === this.props.typedWord[index]
					)
						return (
							<mark className="speed-measure__character speed-measure__character--right">
								{letter}
							</mark>
						);

					return (
						<span className="speed-measure__character speed-measure__character--wrong">
							{letter}
						</span>
					);
				})}
			</label>
		);
	}
}
