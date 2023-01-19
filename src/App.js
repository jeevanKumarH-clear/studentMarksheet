import { React, useState } from 'react';
import './App.scss';
import Add from './components/Add';
import Input from './components/Input';
import SimpleTable from './components/simpleTable';
import markSheets from './service/markSheets';

const initialMarks = {
	currentMarksheet: markSheets,
	marks: {
		rollNo: '',
		name: '',
		tamil: '',
		english: '',
		maths: '',
		science: '',
		social: '',
	},
};

const App = (context) => {
	const [state, setState] = useState(initialMarks);
	const extendedContext = { ...context, state, setState };

	return <div className="App" role="App">
		<SimpleTable { ...extendedContext }/>
		<Input { ...extendedContext }/>
		<Add { ...extendedContext }/>
	</div>;
};

export default App;
