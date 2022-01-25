import React from 'react';

import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Home} from './pages/Home'
import {Portfolio} from './pages/Portfolio'

function App() {
	/*
	const [counter, setCounter] = useState<number>(0);
	<button onClick={() => setCounter(counter+1)}>Counter</button>
	{counter}
	*/

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/portfolio" element={<Portfolio/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
