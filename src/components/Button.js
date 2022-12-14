import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    this.props.clickHandler({
      total: 123,
      next: 3221,
      operation: 231,
    });
  };

  render() {


    return (
      <div className="component-button">
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}