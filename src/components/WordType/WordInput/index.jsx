import React from "react";
import classNames from "classnames";
import "./index.css";

export default function WordInput(props) {
	return (
		<input
			id={props.id}
			className={classNames("word-type__input")}
			value={props.typedWord}
			onPaste={event => event.preventDefault()}
			onChange={event => {
				const value = event.target.value;
				if (value !== props.goalWord) {
					props.updateTypedWord(value);
					return;
				}

				props.changeGoalWord();
			}}
			autoFocus
		/>
	);
}
