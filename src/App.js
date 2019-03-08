import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Home from './component/Home.js';
import About from './component/About.js';
import Contact from './component/Contacts.js';
import Profile from './component/Profile.js';
import FAQ from './component/FAQ.js';
import Skills from './component/Skills.js';
import User from './component/User.js';
import Education from './component/Education.js';
import Portfolio from './component/Portfolio.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="Head">
      <div className="menu">
          <img className='LOG' src='./logo3.ico' alt=''></img>
      <ul>
       
        <li> <Link to="/">Home</Link> </li>

        <li> <Link to="/profile">Profile</Link></li>

        <li> <Link to="/education">Education</Link></li>
      
        <li> <Link to="/about">About</Link></li>
 
        <li> <Link to="/skills">Skills</Link> </li>

        <li> <Link to="/portfolio">Portfolio</Link> </li>
             
        <li> <Link to="/contact">Contact</Link> </li>

        <li> <Link to="/faq">FAQ</Link> </li>
     
        <li className='HALL'> <Link to="/User">User</Link> </li>
       
      </ul>
      </div>
      </div>
        <header className="App-header">
         </header>     
         <div className="App-intro">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/education" component={Education}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/faq" component={FAQ}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/user" component={User}/>
            <Redirect to="/" />
          </Switch>
       </div>
      </div>
    );
  }
}


export default App;
