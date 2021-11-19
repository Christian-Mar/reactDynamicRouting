import { useState, useEffect } from 'react';
import { Link } from '@reach/router';

const CountryDetails = () => {

  useEffect(() => {fetchItem()},[]);

  const [covidCountry, setCovidCountry] = useState({});

  const url = 'https://api.covid19api.com/summary'

  const fetchItem = async () => {
    const fetchItem = await fetch(url)
    const item = await fetchItem.json;
    console.log(item);
  }

  return (
    <div>
      <h1>Details</h1>
      
    </div>
  )
}

export default CountryDetails
