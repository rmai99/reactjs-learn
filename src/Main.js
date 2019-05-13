import React, { Component } from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom"


class Main extends Component {
  render(){
    return(
      <HashRouter>
        <div>
          <h1 className="title">Fetching Data Api</h1>
          <u1 className="header">
            <li><NavLink exact to="/">Home</NavLink></li>

          </u1>
          <div className="content">
            <Route exact path="/" component={Home}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default Main;