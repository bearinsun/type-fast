import React from "react";
import styled from "react-emotion";

const StyledWordInput = styled.input`
	transition: 0.15s all ease;

	display: block;
	width: 90vw;
	margin: 0 auto;
	border: none;
	box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.02);
	padding: 1.25em 1.25em;
	background-color: white;

	font-size: 1.5em;
	color: #222;

	&:hover,
	&:focus {
		transition: 0.15s all ease;
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
	}

	@media (min-width: 769px) {
		width: 35vw;
	}
`;

export default React.forwardRef((props, ref) => (
	<StyledWordInput
		id={props.id}
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
		innerRef={ref}
	/>
));
