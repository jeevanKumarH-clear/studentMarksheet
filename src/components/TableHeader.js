import { React } from 'react';

const tableHeader = (details, index) =>
	<th key={ index } className="headerStyle">{details}</th>;

export default tableHeader;
