import React from "react";
import classNames from "classnames";
import "./index.css";

function compareWords(reference, comparison) {
	const comparisonLetters = comparison.slice(0, reference.length).split("");

	return comparisonLetters.reduce((previousLetterGroups, letter, index) => {
		let lastLetterGroup =
			previousLetterGroups[previousLetterGroups.length - 1];
		const isMatching = letter === reference[index];

		if (!lastLetterGroup || lastLetterGroup.isMatching !== isMatching) {
			lastLetterGroup = {
				letters: ""
			};
			previousLetterGroups.push(lastLetterGroup);
		}

		lastLetterGroup.letters += reference[index];
		lastLetterGroup.isMatching = isMatching;

		return previousLetterGroups;
	}, []);
}

export default function Word(props) {
	return (
		<label
			className="word-type__word"
			htmlFor={props.htmlFor}
			title="Type this word!"
		>
			{props.typedWord
				? [
						compareWords(props.goalWord, props.typedWord).map(
							(letterGroup, index) => {
								const className = classNames(
									"word-type__letters",
									{
										"word-type__letters--correct":
											letterGroup.isMatching,
										"word-type__letters--incorrect": !letterGroup.isMatching
									}
								);

								return (
									<mark className={className} key={index}>
										{letterGroup.letters}
									</mark>
								);
							}
						),
						props.goalWord.slice(props.typedWord.length)
				  ]
				: props.goalWord}
		</label>
	);
}
