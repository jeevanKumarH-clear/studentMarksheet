/* eslint-disable max-lines-per-function */
import React from 'react';

const Input = (context) => {
	const { state, setState, config: { headers }} = context;
	const { marks } = state;

	return headers.map((header, key) => <span key={ key }>
		<label>{header}</label>
		<input
			type="text"
			style={ { width: '60px' } }
			onChange={ (event) => setState({
				...state,
				marks: { ...marks, [header]: event.target.value },
			}) }
		/>
	</span>);
};

export default Input;
