import React from "react";
import withProps from "recompose/withProps";
import styled from "react-emotion";

const StyledCheckbox = withProps({
	type: "checkbox"
})(styled.input`
	transition: 0.15s all ease;

	position: relative;

	display: inline-block;
	vertical-align: middle;

	width: 1.35em;
	height: 1.35em;
	box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.02);
	background-color: #fff;
	appearance: none;

	&:hover,
	&:focus {
		transition: 0.15s all ease;
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
	}

	&::before {
		transition: 0.15s all ease;

		content: "";

		position: absolute;
		top: 50%;
		left: 50%;

		transform: translate(-50%, -50%);

		width: 0;
		height: 0;
		background-color: #222;
	}

	&:checked::before {
		transition: 0.15s all ease;

		width: 0.65em;
		height: 0.65em;
	}
`);

const StyledCheckboxLabel = styled.label`
	display: inline-block;
	vertical-align: middle;
	margin-left: 0.75em;

	color: #333;
`;

export default function WordToggle(props) {
	return (
		<div>
			<StyledCheckbox
				id={props.id}
				checked={props.checked}
				onChange={props.onChange}
			/>
			<StyledCheckboxLabel htmlFor={props.id}>
				{props.label}
			</StyledCheckboxLabel>
		</div>
	);
}
