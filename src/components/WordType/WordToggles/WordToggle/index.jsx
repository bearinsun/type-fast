import React from "react";
import classNames from "classnames";

export default function WordToggle(props) {
	return [
		<input
			id={props.id}
			className={classNames("word-type__checkbox")}
			checked={props.checked}
			onChange={props.onChange}
			type="checkbox"
		/>,
		<label className={classNames("word-type__label")} htmlFor={props.id}>
			{props.label}
		</label>
	];
}
