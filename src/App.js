import { Router } from '@reach/router';
import Home from './components/Home';
import Data from './components/Data';
import Nav from './components/Nav';
import CountryDetails from './components/CountryDetails';
import './App.css';

function App() {
  return (
    <>
    <Nav/>
    <h1>Main page</h1>
    <Router>
      <Home path='/' /> 
      <Data path='data' /> 
      <CountryDetails path='data/:ID'/>    
    </Router>
    </>
    

    
  );
}

export default App;
