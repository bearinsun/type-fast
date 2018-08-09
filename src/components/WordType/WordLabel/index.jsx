import React, { Component } from "react";

export default class WordLabel extends Component {
	render() {
		return (
			<label className="word-input__label" htmlFor={this.props.htmlFor}>
				{this.props.word.split("").map((letter, index) => {
					if (!this.props.typedWord[index]) return letter;

					let className = "word-input__character ";
					if (
						this.props.word[0] === this.props.typedWord[0] &&
						letter === this.props.typedWord[index]
					)
						className += "word-input__character--right";
					else className += "word-input__character--wrong";

					return <mark className={className}>{letter}</mark>;
				})}
			</label>
		);
	}
}
