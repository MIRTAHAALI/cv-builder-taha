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
    this.props.clickHandler(1);
  };
  handleClick2 = () => {
    this.props.clickHandler(2);
  };
  render() {


    return (
      <div className="component-fselect">
        <button onClick={this.handleClick}>Template 1</button>
        <button onClick={this.handleClick2}>Template 2</button>
      </div>
    );
  }
}