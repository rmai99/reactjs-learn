import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Profile extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
        <div>
          <p>{this.props.nama}</p>
          <img src="kuning.jpg"/>
        </div>      
        );
      }
    }
export default Profile;
