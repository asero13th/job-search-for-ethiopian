import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import JobDetail from "./components/JobDetail"
import About from "./components/About"
import Profile from "./components/Profile"
import PageNotFound from "./components/PageNotFound"
function App() {
  return (
    <div className="App">
       <Router>
        <Header />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/aboutus' exact Component={About} />
          <Route path='/user/:userId' Component={Profile} />
          <Route path='/product/:productId' Component={JobDetail} />
          <Route path='/product/:id' Component={PageNotFound} />
          <Route path='/:id'  Component={PageNotFound}/>
        </Routes>
        <Footer />
       </Router>
    </div>
  );
}

export default App;
