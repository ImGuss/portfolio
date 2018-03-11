import React from 'react';
import ReactDOM from 'react-dom';

require('../style.css');


// components
import Header from  './header';
import Footer from  './footer';
import FullScreen from  './full-screen';
import DonkeyKong from  './donkey-kong';


export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <FullScreen />
        <DonkeyKong />
        <Header />
        <Footer />
      </div>
    );
  }
}
