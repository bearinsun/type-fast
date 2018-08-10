import React from "react";
import classNames from "classnames";
import "./index.css";

export default function WordToggles(props) {
	return (
		<ul className={classNames("word-type__toggles")}>
			{props.children.map((element, index) => (
				<li className={classNames("word-type__toggle")} key={index}>
					{element}
				</li>
			))}
		</ul>
	);
}
