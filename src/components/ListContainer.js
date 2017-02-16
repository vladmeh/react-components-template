/**
 * Created by mvl on 16.02.2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

const data = [
	{ id: 2, name: 'элемент'},
	{ id: 1, name: 'элемент'},
	{ id: 0, name: 'элемент'}
];

const renderItem =
	() =>
		ReactDOM.render(<ListContainer />, document.getElementById('root'));

const appendItem = () => {
	data.unshift({
		id: data.length,
		name: 'элемент'
	});
	renderItem();
};

class Counter extends React.PureComponent {
	constructor() {
		super();
		this.state = {
			count: 0
		}
	}
	handleClick = () => this.setState({count: this.state.count + 1});
	render() {
		return <span>
      {this.state.count}
			<button onClick={this.handleClick}>+</button>
    </span>
	}
}

const ListItem =
	({ item }) =>
		<li>{item.id} - {item.name} - <Counter /></li>;

const renderListItem =
	(item) =>
		<ListItem key={item.id} item={item}/>;

const List =
	({ data }) =>
		<ul>
			{data.map(renderListItem)}
		</ul>;

const ListContainer =
	() =>
		<div>
			<List data={data}/>
			<button onClick={appendItem}>добавить элемент</button>
		</div>;

/*
const render =
	() =>
		ReactDOM.render(<ListContainer />, document.getElementById('root'));
render();
*/

export default ListContainer;