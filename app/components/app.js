const React = require('react');
const ReactDOM = require('react-dom');

require('../style.css');


// components
const Header = require('./header');
const Footer = require('./footer');
const FullScreen = require('./full-screen');
const DonkeyKong = require('./donkey-kong');


class App extends React.Component {
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


module.exports = App;
