import { peek } from '@laufire/utils/debug';
import { React } from 'react';
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

const SimpleTable = (context) => {
	const { state: { currentMarksheet }} = context;

	return <div>
		<h1>Marksheet</h1>
		<table className="tableStyle">
			<thead>
				<tr>
					{headings.map(tableHeader)}
				</tr>
			</thead>
			<tbody>
				{addFields(peek(currentMarksheet)).map(tableData)}
			</tbody>
		</table>
	</div>;
};

export default SimpleTable;
