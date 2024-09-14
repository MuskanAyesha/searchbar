import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import './App.css';  

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1 className="app-heading">SearchBar</h1> 
      <SearchBar data={data} />
    </div>
  );
}

export default App;
