/**
 * Created by mvl on 15.02.2017.
 */
import React from 'react';

const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onChange(e.target.value);
	}

	render() {
		const value = this.props.value;
		const scale = this.props.scale;
		return (
			<fieldset>
				<legend>Enter temperature in {scaleNames[scale]}:</legend>
				<input value={value}
							 onChange={this.handleChange} />
			</fieldset>
		);
	}
}

export default TemperatureInput;