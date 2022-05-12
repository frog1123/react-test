import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Title from './components/Title/Title';
import Thing from './components/Thing/Thing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<Title name='amogus' />
		<Title name='amogus2' />
		<Thing />
	</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
