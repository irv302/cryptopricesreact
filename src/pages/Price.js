// import React from "react";
import { useEffect, useState } from "react";

const Price = (props) => {
// set a local variable to hold our api key
const apiKey = 'D5D3B1FE-C1E9-48ED-9353-3D5ED828E83B';
// caprture the coin symbol from route props
const symbol = 'where do we get this?'
//set a local variable for our dynamic ApI Url
 const url = ;
// initialize state to hold our coin data once received from the API 
const [ coin, setCoin ] = useState(null);
//define a funtion to perform the AJAX (aka use javascript to make http request to API)
const getCoin = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCoin(data);
}
// invoke a call to useEffect to run an effect once the compente loads (make the ajax)
useEffect (() => {
    getCoin();
})
// define some functionality to show a loading message until the data is ready
const loading = () => {
    return <h1>Loading...</h1>

};
  const loading = () => {
    return (
    <div>
  <h1>{coin.asset_id_base}/{coin.asset_id_quote}</h1>

</div>
);
    };
    return coin ? loded() : loading();
    // return <h1>This is the Price Component</h1>
}
export default Price;