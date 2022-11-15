import { React } from 'react';
import './App.scss';

const getCompensations = () => [
	{
		name: 'A',
		amount: 200,
	},
	{
		name: 'B',
		amount: 300,
	},
];

const getOutput = ({ name, amount }) =>
	`${ name } got ${ amount }.`;

const App = () => {
	const compensations = getCompensations();
	const lines = compensations.map((compensation, key) =>
		<div
			key={ key }
			style={ {
				background: 'wheat',
				border: '1px solid brown',
				marginTop: '10px',
			} }
		>
			{ getOutput(compensation)}
		</div>);

	// eslint-disable-next-line no-console
	console.log({ compensations, lines });

	return <div>
		<h1>Compensations</h1>
		<div> { lines }</div>
	</div>;
};

export default App;
