const React = require('react');
const ReactDOM = require('react-dom');


class Header extends React.Component {
  render() {
    return (
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    );
  }
}



module.exports = Header;
