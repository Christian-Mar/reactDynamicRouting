import { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import './Data.css';

const Data = () => {

  useEffect(() => {fetchItems()},[]);

  const [worldOfCovid, setWorldOfCovid] = useState([]);

  const url = 'https://api.covid19api.com/summary'

  const fetchItems = async () => {
    const data = await fetch(url)
    const responseData = await data.json();
    console.log(responseData.Countries);
    setWorldOfCovid(responseData.Countries);
  }

  return (
    <div>
      <h1>Landen</h1>
      {worldOfCovid.map(item => (<p key={item.ID}><Link to={`In ${item.Country} zijn er in totaal ${(item.TotalConfirmed).toLocaleString()} gevallen van Covid19 geweest, waarvan ${(item.TotalDeaths).toLocaleString()} mensen overleden zijn. Nieuwe gevallen: ${(item.NewConfirmed).toLocaleString()}.`} className='countries'>{item.Country}</Link></p>))}
    </div>
  )
}

export default Data
