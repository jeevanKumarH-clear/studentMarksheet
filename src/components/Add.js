import React from 'react';

const Add = (context) => {
	const { state, setState } = context;
	const { currentMarksheet, marks } = state;

	return <div>
		<button onClick={ () => setState({
			...state,
			currentMarksheet: [...currentMarksheet, marks],
		}) }
		> Add</button>
	</div>;
};

export default Add;
