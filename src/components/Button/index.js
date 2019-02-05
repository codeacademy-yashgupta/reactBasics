import React, { Component } from 'react';
import './Button.css'
class Button extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="divButton">
        <button className="button" onClick = {this.props.onClick}>{this.props.caption}</button>
      </div>
    );
  }
}

export default Button;
