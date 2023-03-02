// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homescreen/>
    </div>
  );
}

export default App;
