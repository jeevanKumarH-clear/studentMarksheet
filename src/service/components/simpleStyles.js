/* eslint-disable max-len */
import { React } from 'react';
import marks from '../marksheets/marksheets';

const rowStyle = {
	background: 'bisque',
	marginTop: '20px',
	fontSize: '30px',
	color: 'purple',
	font: 'Verdana',
	border: '6px outset plum',
	textAlign: 'center',
};

const textColumnStyle = {
	display: 'inline-block',
	border: '5px solid lightgreen',
	width: '150px',
	textAlign: 'left',
	paddingLeft: '10px',
};

const numberColumnStyle = {
	...textColumnStyle,
	textAlign: 'right',
};

const headerStyle = {
	fontSize: '25px',
	border: '5px',
	background: 'lightgray',
	textAlign: 'center',
	color: 'lightseagreen',
};

const titleStyle = {
	background: 'lemonchiffon',
	borderTop: '3px outset aquamarine',
	height: '30px',
	color: 'indigo',
	font: 'verdana',
	border: '2px solid purple',
	fontSize: '25px',
	wordSpacing: '84px',
	paddingLeft: '149px',
};

const SimpleStyles = () => {
	const lines = marks.map(({ rollNo, name, tamil, english, maths, science, social }, key) =>
		<div
			key={ key }
			style={ rowStyle }
		>
			<span style={ numberColumnStyle }>{rollNo}</span>
			<span style={ textColumnStyle }>{name}</span>
			<span style={ numberColumnStyle }>{tamil}</span>
			<span style={ numberColumnStyle }>{english}</span>
			<span style={ numberColumnStyle }>{maths}</span>
			<span style={ numberColumnStyle }>{science}</span>
			<span style={ numberColumnStyle }>{social}</span>
		</div>);

	return <div>
		<div style={ headerStyle }><h1>Marksheet</h1></div>
		<div style={ titleStyle }>RollNo Name Tamil English Maths Science Social </div>
		<div>{lines}</div>;
	</div>;
};

export default SimpleStyles;
