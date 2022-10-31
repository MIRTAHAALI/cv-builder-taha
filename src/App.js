import './App.css';
import React from "react";
import Button from "./components/Button";
import Format1 from "./components/formats/Format1";
import Format2 from "./components/formats/Format2";
import FormatSelect from "./components/FormatSelect";
import Input_Component from "./components/Input_Component";
import PropTypes from "prop-types";
export default class App extends React.Component {
  state = {
    name: null,
    phone: null,
    email: null,
    address: null,
    workEx: [],
    education: [],
    template1: '',
    template2: 'none'
  };

  handleClickAddEdu = details => {
    this.setState({
      education: details
    });
  };
  handleClickAddExp = details => {
    this.setState({
      workEx: details
    });
  };

  updateStates = item => {
    console.log(item.target.value);
    console.log(item.target.name);
    this.setState({
      [item.target.name]: item.target.value
    })
  }
  changeTemplate = item =>{
    if (item==1)
    {
      this.setState({
        template1: '',
        template2: 'none'
      })
    }
    else
    {
      this.setState({
        template1: 'none',
        template2: ''
      })
    }
  }

  saveToBackEnd = item => {
      // Simple POST request with a JSON body using fetch
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.state)
      };
      fetch('http://localhost:4000/save', requestOptions)
          .then(response => response.json())
          .then(data => console.log(data));
  }
  render() {
    return (
      <div className="App-header">
        <Format2 visible={this.state.template2} details={{
          name: this.state.name,
          phone: this.state.phone,
          email: this.state.email,
          address: this.state.address,
          workEx: this.state.workEx,
          education: this.state.education
        }} />
        <Format1 visible={this.state.template1} details={{
          name: this.state.name,
          phone: this.state.phone,
          email: this.state.email,
          address: this.state.address,
          workEx: this.state.workEx,
          education: this.state.education
        }} />
        <FormatSelect details={this.state} clickHandler={this.changeTemplate}/>
        <button className='saveButton' onClick={this.saveToBackEnd}>Save</button>
        <input onChange={this.updateStates} className='min-inputs' placeholder='Enter Name' name='name'></input>
        <input onChange={this.updateStates} className='min-inputs' placeholder='Enter Email Address' name='email'></input>
        <input onChange={this.updateStates} className='min-inputs' placeholder='Enter Phone' name='phone'></input>
        <input onChange={this.updateStates} className='min-inputs' placeholder='Mailing Address' name='address'></input>
        <Input_Component idPreFix='exp' clickHandler={this.handleClickAddExp} titlePlaceHolder="Enter Employee Name" descPlaceHolder="Enter Work Experience Description" name="Add Work Experience" />
        <Input_Component idPreFix='edu' clickHandler={this.handleClickAddEdu} titlePlaceHolder="Enter University Name" descPlaceHolder="Enter Specialization" name="Add Education" />

      </div>
    );
  }
}
