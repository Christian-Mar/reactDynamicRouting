import { useState, useEffect } from 'react';
import { Link } from '@reach/router';

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
      <h1>Data</h1>
      {worldOfCovid.map(item => (<p key={item.ID}><Link to={`data/${item.ID}`}>{item.Country}</Link></p>))}
    </div>
  )
}

export default Data
