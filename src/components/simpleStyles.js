/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import { React } from 'react';
import marks from '../service/markSheets';

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
	height: '45px',
	color: 'indigo',
	font: 'verdana',
	border: '6px outset plum',
	fontSize: '30px',
	wordSpacing: '50px',
	paddingLeft: '70px',
	marginTop: '50px',
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
		<div style={ titleStyle }>
			<span style={ numberColumnStyle }>RollNo</span>
			<span style={ textColumnStyle }>Name</span>
			<span style={ numberColumnStyle }>Tamil</span>
			<span style={ numberColumnStyle }>English</span>
			<span style={ numberColumnStyle }>Maths</span>
			<span style={ numberColumnStyle }>Science</span>
			<span style={ numberColumnStyle }>Social</span>
		</div>
		<div>{lines}</div>;
	</div>;
};

export default SimpleStyles;
