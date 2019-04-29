import React, { Component } from 'react';
import './App.css';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';


class Profile extends Component {
  constructor(props){
    super(props);
  }
  alert(e){
    e.preventDefault();
      toast.notify('Hello world!')
  }
  render(){
    return(
        <div>
          <form onSubmit={this.alert.bind(this)}>
            <button>alert</button>
          </form>
          <p>{this.props.nama}</p>
          <img src="kuning.jpg"/>
        </div>      
        );
      }
    }
export default Profile;
