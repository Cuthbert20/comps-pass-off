import React from 'react';
import Footer from './components/Footer/Footer'
import './App.css';
import Nav from './components/Nav/Nav'
import Dashboard from './components/Dashboard/Dashboard'
import Info from './components/Info/Info'

function App() {
  return (
    <div className="App">
      <header></header>
      <Nav />
      <Dashboard />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
