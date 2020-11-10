import React from 'react'
import './App.css';
import Employees from './components/Employees'
import FindEmployee from './components/FindEmployee';
import Header from './components/layout/header'



function App() {
  return (
    <div className="App">
      <Header />
      <FindEmployee />
      <Employees />
    </div>
  );
}



export default App;



