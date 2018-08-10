import React from "react";
import "./index.css";

export default function WordToggles(props) {
	return (
		<ul class="word-type__toggles">
			{props.children.map(element => (
				<li class="word-type__toggle">{element}</li>
			))}
		</ul>
	);
}
