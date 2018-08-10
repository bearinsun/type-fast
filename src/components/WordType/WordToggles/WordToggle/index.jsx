import React from "react";

export default function WordToggle(props) {
	return [
		<input
			id={props.id}
			className="word-type__checkbox"
			checked={props.checked}
			onChange={props.onChange}
			type="checkbox"
		/>,
		<label className="word-type__label" htmlFor={props.id}>
			{props.label}
		</label>
	];
}
