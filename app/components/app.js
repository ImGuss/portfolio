const React = require('react');
const ReactDOM = require('react-dom');

require('../style.css');


// components
const Header = require('./header');
const Footer = require('./footer');
const FullScreen = require('./full-screen');


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <FullScreen />
        <Footer />
      </div>
    );
  }
}


module.exports = App;
