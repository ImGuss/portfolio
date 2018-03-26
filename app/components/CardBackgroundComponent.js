import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require('../style.css');

export default class CardBackground extends Component {
  render() {

    const styles = {
      'grid-column': '1/5',
      'grid-row': '2/3',
      'background-image': "url('http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/why-is-this-game-named-after-the-villain.png?itok=gjgRKul2&resize=1100x619')",
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'background-attachment': 'fixed'
    }

    return(
      <div style={styles}>
      </div>
    );
  }
}