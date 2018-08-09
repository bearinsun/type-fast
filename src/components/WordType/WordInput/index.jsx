import React, { Component } from "react";

export default class WordInput extends Component {
	handleChange(event) {
		const value = event.target.value;
		if (value !== this.props.word) {
			this.props.updateTypedWord(value);
			return;
		}

		this.props.changeWord();
	}

	render() {
		return (
			<input
				id={this.props.id}
				className="word-type__input"
				value={this.props.typedWord}
				onChange={this.handleChange.bind(this)}
				autoFocus
			/>
		);
	}
}
