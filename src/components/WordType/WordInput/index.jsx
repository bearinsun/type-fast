import React, { Component } from "react";

export default class WordInput extends Component {
	render() {
		return (
			<input
				id={this.props.id}
				className="word-type__input"
				value={this.props.typedWord}
				onChange={event => {
					const value = event.target.value;
					if (value !== this.props.word) {
						this.props.updateTypedWord(value);
						return;
					}

					this.props.completeWord();
				}}
				autoFocus
			/>
		);
	}
}
