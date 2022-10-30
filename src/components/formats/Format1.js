import React from "react";
import PropTypes from "prop-types";
import "./Format1.css";
import { useState } from "react";

export default class Format1 extends React.Component {
  static propTypes = {
    details: PropTypes.object,
    visible: PropTypes.string
  };

  render() {


    return (
      <div className="input-head" style={{display:this.props.visible}}>
        <p className="p-head">{this.props.details.name}</p>
        <p className="p-head-contact">Phone:  {this.props.details.phone} Email: {this.props.details.email}</p>
        <p className="p-head-add">Mailing Address: <i>{this.props.details.address}</i></p>
        <p className="p-head-l h"><b>Work Experience</b></p>
        {
            this.props.details.workEx.map((item)=> (
                <><p className="p-head-l"><b>{item.title}</b></p><p className="p-head-l">{item.detail}</p></>
            ))
        }
        <br />
        <p className="p-head-l h"><b>Education</b></p>
        {
            this.props.details.education.map((item)=> (
                <><p className="p-head-l"><b>{item.title}</b></p><p className="p-head-l">{item.detail}</p></>
            ))
        }
      </div>
      
    );
  }
}