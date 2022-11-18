import { React } from 'react';

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

export default tableData;
