/* eslint-disable max-lines-per-function */
import { React } from 'react';
import markSheets from '../service/markSheets';
import addFields from '../service/studentManager';

const headings = [
	'RollNo',
	'Name',
	'Tamil',
	'English',
	'Maths',
	'Science',
	'Social',
	'Total',
	'Result',
	'Rank',
];

const tableHeader = (details, index) =>
	<th key={ index } className="headerStyle">{details}</th>;

const tableData = (student, key) =>
	<tr key={ key }>
		<td className="rowStyle">{student.rollNo}</td>
		<td className="rowStyle">{student.name}</td>
		<td className="rowStyle">{student.tamil}</td>
		<td className="rowStyle">{student.english}</td>
		<td className="rowStyle">{student.maths}</td>
		<td className="rowStyle">{student.science}</td>
		<td className="rowStyle">{student.social}</td>
		<td className="rowStyle">{student.total}</td>
		<td className="rowStyle">{student.result}</td>
		<td className="rowStyle">{student.rank}</td>
	</tr>;

const SimpleTable = () =>
	<div>
		<h1>Marksheet</h1>
		<table className="tableStyle">
			<thead>
				<tr>
					{headings.map(tableHeader)}
				</tr>
			</thead>
			<tbody>
				{
					addFields(markSheets).map(tableData)
				}
			</tbody>
		</table>
	</div>;

export default SimpleTable;
