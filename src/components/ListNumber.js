/**
 * Created by mvl on 15.02.2017.
 */
import React from 'react';

function ListItem(props) {
	// Correct! There is no need to specify the key here:
	return <li>{props.value}</li>;
}

function ListNumber(props) {
	const numbers = props.numbers;
	return (
		<ul>
			{numbers.map((number) =>
				<ListItem key={number.toString()}
									value={number} />
			)}
		</ul>
	);
}
export default ListNumber;

/*
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
	<ListNumber numbers={numbers} />,
	document.getElementById('root')
);*/
