import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require('../style.css');


// components
import Header from  './HeaderComponent';
import FullScreen from  './FullScreenComponent';
import CardBackground from './CardBackgroundComponent';
import DonkeyKongTitle from './DonkeyKongTitleComponent.js';
import DonkeyKongText from  './DonkeyKongTextComponent';
import Footer from  './FooterComponent';


export default class App extends Component {
  render() {
    return (
      <div className="grid">
        <div className="home">
        </div>
        <FullScreen />
        <CardBackground />
        <DonkeyKongTitle />
        <DonkeyKongText />
        <Footer />
      </div>
    );
  }
}
