import React from 'react';
import useFetch from './hooks/useFetch'

import Button from './components/Button/';

const App = () => {

	const [data] = useFetch("https://api.figma.com/v1/files/CAYKzp42MD7y5fyvXUXlep");

	console.log(data);

    return (

        <Button size="medium" theme="primary">Send</Button>

    );
}

export default App;
