import { Router } from '@reach/router';
import Home from './components/Home';
import Data from './components/Data';
import Nav from './components/Nav';
import CountryDetails from './components/CountryDetails';
import './App.css';

function App() {
  return (
    <div className='container'>
    <Nav/>
    <h1>Covid19</h1>
    <Router>
      <Home path='/' /> 
      <Data path='data' /> 
      <CountryDetails path='data/:ID' />  
      
    </Router>
    </div>
    

    
  );
}

export default App;
