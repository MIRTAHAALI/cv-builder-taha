import React from "react";
import PropTypes from "prop-types";
import "./FormatSelect.css";

export default class FormatSelect extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    
    //this.props.clickHandler(this.props.name);
  };

  render() {


    return (
      <div className="component-fselect">
        <button onClick={this.handleClick}>Format 1</button>
        <button onClick={this.handleClick}>Format 2</button>
      </div>
    );
  }
}