import useFetch from './hooks/useFetch'

import Button from './components/Button/';

const App = () => {

	const [data] = useFetch("https://api.figma.com/v1/files/CAYKzp42MD7y5fyvXUXlep");

	console.log(data);

    return (

        <>
            <Button size="small" theme="morethan">Continue</Button>
            <Button size="small" theme="ms">Continue</Button>
        </>

    );
}

export default App;
