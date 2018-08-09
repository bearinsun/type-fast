import React from "react";

export default function WordLabel(props) {
	function computePartials() {
		const typedLetters = (props.typedWord.length > props.word.length
			? props.typedWord.slice(0, props.word.length)
			: props.typedWord
		).split("");

		return typedLetters.reduce((previousPartials, letter, index) => {
			let lastPartial = previousPartials[previousPartials.length - 1];
			const isCorrect = letter === props.word[index];

			if (!lastPartial || lastPartial.isCorrect !== isCorrect) {
				lastPartial = {
					letters: ""
				};
				previousPartials.push(lastPartial);
			}

			lastPartial.letters += props.word[index];
			lastPartial.isCorrect = isCorrect;

			return previousPartials;
		}, []);
	}

	return (
		<label className="word-type__label" htmlFor={props.htmlFor}>
			{props.typedWord
				? [
						computePartials().map((partial, index) => {
							let className =
								"word-type__letters word-type__letters--";
							className += partial.isCorrect
								? "correct"
								: "incorrect";

							return (
								<mark className={className} key={index}>
									{partial.letters}
								</mark>
							);
						}),
						props.word.slice(props.typedWord.length)
				  ]
				: props.word}
		</label>
	);
}
