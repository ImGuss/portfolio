const React = require('react');
const ReactDOM = require('react-dom');

class DonkeyKong extends React.Component {
  render() {
    return (
      <div>
        <div className="donkey-kong-image">

        </div>

        <h2 className="donkey-kong-title">Donkey Kong</h2>

        <div className="donkey-kong-text">
          <p>
            A Donkey Kong game with a twist! In this Donkey Kong replica I used the basics of web development to create a
          </p>
        </div>
      </div>
    );
  }
}

module.exports = DonkeyKong;
