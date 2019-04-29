import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile.js';
import Calculator from './Calculator.js';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      name : 'Apel',
      color : 'merah',
      desc : 'test',
      img : 'merah.jpg',
    };
    toast.notify('Hello world!')
  }

  clicked(menu) {
    //utk memperbarui state sesuai dengan menu yang digunakan
    this.setState({
      name : menu.name,
      color: menu.color,
      desc : menu.desc,
      img : menu.img,
    })
  }
  info(name){
   // console.log(name);
    if(name == 'Calculator'){
      return<Calculator items = {this.state}/>;
    }
    else if(name == "Profile") {
      return <Profile nama="maida krisma rajagukguk"/>;

    }
    else{
      return (
        <div>
      ini adalah 
      <span className={"selected "+this.state.color}>
          {this.state.name}
      </span>
    <br></br>
    <p>
    {this.state.desc}
    </p>
      <br></br>
      <img src={this.state.img} width="240"></img>
      {/*<br></br>
      <br></br>
      <div className={"image "+ this.state.color}></div>*/}
      </div>)
    }
  }      

  render(){
    return(
      <div id="app">
          <nav className="nav">{this.props.items.map((
            menu, index)=> {
              var style = 'menu';

              if(this.state.color===menu.color){
                style = `${style} is-active`;
              } //muncul warna berbeda ketika diklik

            return <a
                  className={style+" "+menu.color}
                  onClick={this.clicked.bind(this,menu)}
                  key={index}>
                  {menu.name}
                  </a>;
           }) }
          </nav>

          <div className="info">
          {this.info(this.state.name)}

          </div>
      </div>
        );
      }
    }
export default App;
