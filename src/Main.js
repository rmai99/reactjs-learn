import React, { Component } from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom"
import Male from './Male.js';
import Female from './Female.js';
import Home from './Home.js';


class Main extends Component {
  render(){
    return(
      <HashRouter>
      <div>
        <h1 className="Title">Fetching Data API</h1>
        <ul className="header">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink exact to="/male">Male</NavLink></li>
        <li><NavLink exact to="/female">Female</NavLink></li>
        </ul>

        <div className="content">
        <Route exact path="/" component={Home}/>
        <Route exact path="/male" component={Male}/>
        <Route exact path="/female" component={Female}/>

        </div>
      </div>
    </HashRouter>
    );
  }
}
export default Main;