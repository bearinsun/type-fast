import React from "react";
import styled from "react-emotion";

const StyledToggles = styled.ul`
	display: table;

	width: 0;
	margin: 0;
	margin-top: 1.25em;
	border-top: 1px solid #eee;
	padding: 0;

	list-style-type: none;
`;

const StyledToggle = styled.li`
	padding: 0.5em 0;
	white-space: nowrap;
`;

export default function WordToggles(props) {
	return (
		<StyledToggles>
			{props.children.map((element, index) => (
				<StyledToggle key={index}>{element}</StyledToggle>
			))}
		</StyledToggles>
	);
}
