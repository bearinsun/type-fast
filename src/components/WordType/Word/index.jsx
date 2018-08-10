import React from "react";
import classNames from "classnames";
import "./index.css";

export default function Word(props) {
	return (
		<label
			className="word-type__word"
			htmlFor={props.htmlFor}
			title="Type this word!"
		>
			{props.typedWord
				? [
						props.letterGroups.map((letterGroup, index) => {
							const className = classNames("word-type__letters", {
								"word-type__letters--correct":
									letterGroup.isMatching,
								"word-type__letters--incorrect": !letterGroup.isMatching
							});

							return (
								<mark className={className} key={index}>
									{letterGroup.letters}
								</mark>
							);
						}),
						props.goalWord.slice(props.typedWord.length)
				  ]
				: props.goalWord}
		</label>
	);
}
