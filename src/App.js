import logo from './logo.svg';
import './App.css';
import React from "react";
import Button from "./components/Button";
import FormatSelect from "./components/FormatSelect";
import Input_Component from "./components/Input_Component";
import PropTypes from "prop-types";
export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };
  
  handleClick = buttonName => {

    //this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="App-header">
        <input className='min-inputs' placeholder='Enter Name'></input>
        <input className='min-inputs' placeholder='Enter Address'></input>
        <input className='min-inputs' placeholder='Enter Phone'></input>
        <input className='min-inputs' placeholder='Mailing Address'></input>
        {/*<Button name="Add WorkExperience" clickHandler={this.handleClick} />*/}
        <Input_Component titlePlaceHolder="Enter Employee Title" descPlaceHolder="Enter Work Experience Description" name="Add WorkExperience"  />
        <Input_Component titlePlaceHolder="Enter University Name" descPlaceHolder="Enter Specialization" name="Add Education"  />
        <FormatSelect />
      </div>
    );
  }
}
