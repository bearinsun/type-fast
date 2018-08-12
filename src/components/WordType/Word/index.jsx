import React from "react";
import styled from "react-emotion";

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

const WordLabel = styled.label`
	display: block;
	margin-bottom: 1em;

	cursor: help;
	user-select: none;

	text-align: center;
	font-size: 2.5em;
	font-weight: 700;
	color: #111;

	@media (min-width: 769px) {
		font-size: 3em;
	}
`;

const ValidityMark = styled.mark`
	background-color: ${props =>
		props.isCorrect ? "rgba(46, 204, 113, 0.5)" : "rgba(231, 76, 60, 0.5)"};
`;

export default function Word(props) {
	return (
		<WordLabel htmlFor={props.htmlFor} title="Type this word!">
			{props.typedWord
				? [
						compareWords(props.goalWord, props.typedWord).map(
							(letterGroup, index) => (
								<ValidityMark
									isCorrect={letterGroup.isMatching}
								>
									{letterGroup.letters}
								</ValidityMark>
							)
						),
						props.goalWord.slice(props.typedWord.length)
				  ]
				: props.goalWord}
		</WordLabel>
	);
}
