import { useState, useEffect } from "react";

const useFetch = (url) => {

	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(url, {
			headers: { 'X-Figma-Token': 'figd_hh8SuP5PHIP_r9yHXC6XXPWv0ttv4eaYqoWBvJjd'}
		})
			.then((res) => res.json())
			.then((data) => setData(data));
	}, [url]);

	return [data];	
};

export default useFetch;