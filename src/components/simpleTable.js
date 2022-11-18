import { React } from 'react';
import markSheets from '../service/markSheets';
import addFields from '../service/studentManager';
import tableData from './TableData';
import tableHeader from './TableHeader';

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
