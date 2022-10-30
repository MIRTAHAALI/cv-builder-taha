import React from "react";
import PropTypes from "prop-types";
import "./Input_Component.css";
import { useState } from "react";

export default class Input_Component extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    titlePlaceHolder: PropTypes.string,
    descPlaceHolder: PropTypes.string
  };
  state = {
    items: []
  };
  handleClick = () => {
    alert('sdads')
  };
  addElement = () => {
    alert('sdads')
  };

  Parent = () => {
    this.state.items.push({
      title : document.getElementById('title-input').value,
      detail : document.getElementById('title-textarea').value
    });
    this.setState(this.state.items)
  };
  deleteItem = (item) => {
    alert(item)
  };
  render() {


    return (
      <div className="input-head">
        <p className="p-head">{this.props.name}</p>
        <input placeholder={this.props.titlePlaceHolder} id='title-input' className="title-input"></input>
        <textarea placeholder={this.props.descPlaceHolder} id='title-textarea' className="title-input"></textarea>
        <button onClick={this.Parent}>Add</button>
        {
          this.state.items.map((item) => (
            <div style={{backgroundColor:'yellow'}}>
            <p className="heading">{item.title}</p>
            <p className="heading">{item.detail}</p>
            <button onClick={()=> this.deleteItem(this)}>{item.title}</button>
            </div>
        ))
        }
      </div>
    );
  }
}