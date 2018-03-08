const React = require('react');
const ReactDOM = require('react-dom');


// components
const Header = require('./header');
const Footer = require('./footer');
const FullScreen = require('./full-screen')


class App extends React.Component {
  render() {
    return (
      <div class="container">
        <FullScreen />
        <Header />

        <Footer />
      </div>
    );
  }
}




module.exports = App;
