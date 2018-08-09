import React from "react";

export default function WordInput(props) {
	return (
		<input
			id={props.id}
			className="word-type__input"
			value={props.typedWord}
			onPaste={event => event.preventDefault()}
			onChange={event => {
				const value = event.target.value;
				if (value !== props.word) {
					props.updateTypedWord(value);
					return;
				}

				props.changeWord();
			}}
			autoFocus
		/>
	);
}
