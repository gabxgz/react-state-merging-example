import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.css';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      buttonText,
      clickHandler,
    } = this.props;

    return (
      <button onClick={clickHandler}>{buttonText}</button>
    );
  }
}


export default Button;
