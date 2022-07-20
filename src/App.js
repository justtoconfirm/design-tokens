//import useFetch from './hooks/useFetch'
import React, { useEffect, useState } from 'react';

import Button from './components/Button';

const App = () => {

	//const [data] = useFetch("https://api.figma.com/v1/files/CAYKzp42MD7y5fyvXUXlep");

    const [tokensData, setTokensData] = useState([]);

    // https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app
    // The JSON data is within the public folder
    const getData=()=>{
        fetch('data/design-tokens.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            //console.log(myJson);
            setTokensData(myJson);
          });
      }
      useEffect(()=>{
        getData()
      },[])

      console.log(tokensData);
      console.log(tokensData.global.tesco_blue.value);

    /*
    useEffect(() => {
        fetch('./data/tokens.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data);
            })
    }, [setTokensData]);
    */

    return (

        <>
            <Button size="small" theme="morethan">Continue</Button>
            <Button size="small" theme="ms">Continue</Button>
        </>

    );
}

export default App;
