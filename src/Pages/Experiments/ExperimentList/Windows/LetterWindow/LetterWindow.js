import React, { Component } from 'react';
import Letter from './Letter/Letter';
import './LetterWindow.css';

class LetterWindow extends Component {

  constructor(props) {
    super(props);
    this.isActive = this.isActive.bind(this);
    this.state = {
      chars: props.chars.split(''),
      left: props.left,
      right: props.right,
      desirable: props.desirable
    }
  }

  isActive(num) {
    let ret = num >= this.state.left && num <= this.state.right;
    return ret;
  }

  componentWillReceiveProps(props) {
    this.setState({
      chars: props.chars.split(''),
      left: props.left,
      right: props.right,
      desirable: props.desirable
    });
  }

  render() {
    return (
      <div className="letter-window">
        <div className="letters">
          {this.state.chars.map((c, i) => {
            return (
              <Letter
                key={i}
                index={i}
                value={c}
                isLeft={i === this.state.left}
                isRight={i === this.state.right}
                active={this.isActive(i)}
                desirable={this.state.desirable}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default LetterWindow;