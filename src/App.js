import React from 'react';
import Home from './components/home/Home';
import './App.css';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
