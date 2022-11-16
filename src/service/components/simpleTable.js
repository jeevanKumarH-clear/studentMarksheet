/* eslint-disable max-lines-per-function */
import { React } from 'react';
import marks from '../marksheets/marksheets';

const headings = [
	'RollNo',
	'Name',
	'Tamil',
	'English',
	'Maths',
	'Science',
	'Social',
	'Total',
];

const SimpleTable = () =>
	<div>
		<h1>Marksheet</h1>
		<table className="tableStyle">
			<thead>
				<tr>
					{headings.map((details, index) =>
						// eslint-disable-next-line max-len
						<th key={ index } className="headerStyle">{details}</th>)}
				</tr>
			</thead>
			<tbody>
				{
					marks.map((student, key) =>
						<tr key={ key }>
							<td className="rowStyle">{student.rollNo}</td>
							<td className="rowStyle">{student.name}</td>
							<td className="rowStyle">{student.tamil}</td>
							<td className="rowStyle">{student.english}</td>
							<td className="rowStyle">{student.maths}</td>
							<td className="rowStyle">{student.science}</td>
							<td className="rowStyle">{student.social}</td>
							<td className="rowStyle">{student.tamil
								+ student.english
								+ student.maths
								+ student.science
								+ student.social}</td>
						</tr>)
				}
			</tbody>
		</table>
	</div>;

export default SimpleTable;
