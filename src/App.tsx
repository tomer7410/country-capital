import React from 'react';
import logo from './logo.svg';
import './App.css';
import { data } from './data'
import CountryCapitalGame from './Components/CountryCapitalGame';
function App() {
  return (
    <div className="App">
     <CountryCapitalGame data = {data}/>
    </div>
  );
}

export default App;
