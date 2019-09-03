import React from 'react';
import Footer from './components/Footer/Footer'
import './App.css';
import Nav from './components/Nav/Nav'
import Dashboard from './components/Dashboard/Dashboard'
import Info from './components/Info/Info'
import routes from './routes'
import { withRouter } from 'react-router-dom'
import Movies from './components/Movies/Movies'

function App() {
  return (
    <div className="App">
      <header></header>
      <Nav />
      <Dashboard />
      <Info />
      {/* <Movies /> */}
      {routes}
      <Footer />
    </div>
  );
}

export default withRouter(App);
