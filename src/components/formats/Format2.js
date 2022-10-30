import React from "react";
import PropTypes from "prop-types";
import "./Format2.css";
import { useState } from "react";

export default class Format2 extends React.Component {
  static propTypes = {
    details: PropTypes.object,
    visible: PropTypes.string
  };

  render() {


    return (
      <div className="input-head" style={{display:this.props.visible}}>
        <p className="p-head-2"><b>{this.props.details.name}</b></p>
        <p className="p-head-contact-2">Phone:  {this.props.details.phone} Email: {this.props.details.email}</p>
        <p className="p-head-add-2">Mailing Address: <i>{this.props.details.address}</i></p>
        <p className="p-head-l-2 h"><b>Education</b></p>
        {
            this.props.details.education.map((item)=> (
                <><p className="p-head-l-2"><b>{item.title}</b></p><p className="p-head-l-2">{item.detail}</p></>
            ))
        }
        <br />
        <p className="p-head-l-2 h"><b>Work Experience</b></p>
        {
            this.props.details.workEx.map((item)=> (
                <><p className="p-head-l-2"><b>{item.title}</b></p><p className="p-head-l-2">{item.detail}</p></>
            ))
        }
        
        
      </div>
      
    );
  }
}