import { useState, useEffect } from 'react';

const Thing = _ => {
	const [data, setData] = useState('');

	useEffect(() => {
		async function fetchData() {
			const url = 'https://api.randomuser.me/';
			const response = await fetch(url);
			const data = await response.json();

			setData({ person: data.results[0], loading: false });

			console.log(data.results[0]);
		}

		fetchData();
	}, []);

	return (
		<div>
			{data.loading || !data.person ? (
				<h1>loading...</h1>
			) : (
				<div>
					<h1>
						{data.person.name.first} {data.person.name.last}
					</h1>
				</div>
			)}
		</div>
	);
};

export default Thing;
