const React = require('react');
const ReactDOM = require('react-dom');


class FullScreen extends React.Component {
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



module.exports = FullScreen;
