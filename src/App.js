import { React, useState } from 'react';
import './App.scss';
import SimpleTable from './components/simpleTable';
import markSheets from './service/markSheets';

const initialMarks = {
	currentMarksheet: markSheets,
};

const App = (context) => {
	const [state, setState] = useState(initialMarks);
	const extendedContext = { ...context, state, setState };

	return <div className="App" role="App">
		<SimpleTable { ...extendedContext }/>
	</div>;
};

export default App;
