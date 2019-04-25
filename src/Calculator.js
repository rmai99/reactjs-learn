import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Calculator extends Component {
  constructor(props){
    super(props);
    this.state = {
        angka1 : null,
        angka2 :null,
        operator : null,
        hasil :null
    }
  }
  handleSubmit(e){
     e.preventDefault();

    const angka1=parseInt(this.refs.angka1.value);
    const angka2=parseInt(this.refs.angka2.value);
    const operator = this.refs.operator.value;

    var hasil;
    switch(operator){
      case '+' :
      hasil = angka1 + angka2;
      break;
      case '-' :
      hasil = angka1 - angka2;
      break;
      case '*' :
      hasil = angka1 * angka2;
      break;
      case '/' :
      hasil = angka1 / angka2;
      break;
    }
    // console.log(hasil);
    this.setState({angka1, angka2, operator, hasil});
    // console.log(this.state);

    // this.refs.angka1.value= null;
    // this.refs.angka2.value= null;

  }
  renderHasil(){
    const{angka1, angka2, operator, hasil}= this.state;

    if(this.state.hasil){
      return(
        <div>
          <br />
          <p className="alert alert-success">
          {hasil}</p>
        </div>
      );
    }
  }
  render(){
    return (
        <div>
          <span className={"selected "+this.props.items.color}>{this.props.items.name}
          </span><br></br><br></br>
          <form action="hn.php" onChange={this.handleSubmit.bind(this)}>
          <input type="number" ref="angka1" placeholder="Angka1"></input>
          <select className="form-control" ref="operator">
            <option value="+">+</option>
            <option value="-">*</option>
            <option value="*">-</option>
            <option value="/">/</option> 
        </select>
          <input type="number" ref="angka2" placeholder="Angka2"></input>
          <br></br>
          <br></br>
          <button className="btn btn-primary">Hitung</button>
          </form>
          {this.renderHasil()}
        </div>)
      }
    }
export default Calculator;