import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      name : 'Apel',
      color : 'merah',
      desc : 'test',
      img : 'merah.jpg',
    };
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
          <p>
          ini adalah 
            <span className={"selected "+this.state.color}>
                {this.state.name}
            </span>
          </p>
          <br></br>
          <p>
          {this.state.desc}
          </p>
            <br></br>
            <img src={this.state.img} width="240"></img>
            {/*<br></br>
            <br></br>
            <div className={"image "+ this.state.color}></div>*/}
            </div>

      </div>
        );
      }
    }
export default App;
