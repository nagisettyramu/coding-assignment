import React from 'react';
import ListingComponent from './components/listing'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Spacex Launch Details</h2>
      </header>
      <ListingComponent />
      <footer><span><strong>Developed by:</strong>Ramu Nagisetty</span></footer>
    </div>
  );
}

export default App;
