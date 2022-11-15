import { React } from 'react';
import compensations from '../compensations';

const rowStyle = {
	background: 'bisque',
	marginTop: '20px',
	fontSize: '30px',
	color: 'purple',
	font: 'Verdana',
	border: '6px outset plum',
	textAlign: 'center',
};

const columnStyle = {
	display: 'inline-block',
	border: '5px solid red',
	width: '150px',
};

const SimpleStyles = () => {
	const lines = compensations.map(({ name, amount }, key) =>
		<div
			key={ key }
			style={ rowStyle }
		>
			<span style={ columnStyle }>{name}</span>
			<span style={ columnStyle }>{amount}</span>

		</div>);

	return <div><h1>compensations</h1>
		<div>{lines}</div>;
	</div>;
};

export default SimpleStyles;
