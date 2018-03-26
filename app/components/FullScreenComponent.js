import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require('../style.css');


export default class FullScreen extends Component {
  render() {
    return (
      <div className="home-message">
        <h2 className="eat">Eat.</h2>
        <h2 className="code">Code.</h2>
        <h2 className="sleep">Sleep.</h2>
        <h2 className="repeat">Repeat.</h2>
      </div>
    );
  }
}
