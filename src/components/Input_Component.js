import React from "react";
import PropTypes from "prop-types";
import "./Input_Component.css";
import { useState } from "react";

export default class Input_Component extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    titlePlaceHolder: PropTypes.string,
    descPlaceHolder: PropTypes.string,
    clickHandler: PropTypes.func,
    idPreFix: PropTypes.string
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
    if (document.getElementById('title-input'+this.props.idPreFix).value !== '' && document.getElementById('title-textarea'+this.props.idPreFix).value !== '')
    {
    this.state.items.push({
      title: document.getElementById('title-input'+this.props.idPreFix).value,
      detail: document.getElementById('title-textarea'+this.props.idPreFix).value
    });
    this.setState(this.state.items);
    this.props.clickHandler(this.state.items);
    }
  };
  deleteItem = (item) => {
    alert(item)
  };
  render() {


    return (
      <div className="input-head">
        <p className="p-head-title">{this.props.name}</p>
        <input placeholder={this.props.titlePlaceHolder} id={'title-input'+this.props.idPreFix} className="title-input"></input>
        <textarea placeholder={this.props.descPlaceHolder} id={'title-textarea'+this.props.idPreFix} className="title-input"></textarea>
        <button className="addButton" onClick={this.Parent}>Add</button>
        {
          this.state.items.map((item) => (
            <div className="inputs-display">
              <p className="heading"><b>{item.title}</b></p>
              <p className="heading">{item.detail}</p>
            </div>
          ))
        }
      </div>
    );
  }
}