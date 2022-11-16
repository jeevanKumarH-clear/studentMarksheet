/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
/* eslint-disable max-lines-per-function */
import { React } from 'react';
import marks from '../marksheets/marksheets';

const tableStyle = {
	border: '5px dotted cornflowerblue',
	width: '200px',
	margin: 'auto',
};

const rowStyle = {
	border: '2px solid black',
	width: '100px',
	background: 'mistyrose',
};

const headerStyle = {
	fontSize: '25px',
	border: '5px',
	background: 'lightgray',
	textAlign: 'center',
	color: 'cornflowerblue',
};

// eslint-disable-next-line max-len
const headings = ['RollNo', 'Name', 'Tamil', 'English', 'Maths', 'Science', 'Social', 'Total'];

const SimpleTable = () =>
	<div>
		<h1>Basic Table</h1>
		<table style={ tableStyle }><thead>
			<tr>
				{headings.map((details, index) =>
					<th key={ index } style={ headerStyle }>{details}</th>)}
			</tr>
		</thead>
		<tbody>
			{
				marks.map((student, key) =>
					<tr key={ key }>
						<td style={ rowStyle }>{student.rollNo}</td>
						<td style={ rowStyle }>{student.name}</td>
						<td style={ rowStyle }>{student.tamil}</td>
						<td style={ rowStyle }>{student.english}</td>
						<td style={ rowStyle }>{student.maths}</td>
						<td style={ rowStyle }>{student.science}</td>
						<td style={ rowStyle }>{student.social}</td>
						<td style={ rowStyle }>{student.tamil + student.english + student.maths + student.science + student.social}</td>
					</tr>)
			}
		</tbody>
		</table>
	</div>;

export default SimpleTable;
