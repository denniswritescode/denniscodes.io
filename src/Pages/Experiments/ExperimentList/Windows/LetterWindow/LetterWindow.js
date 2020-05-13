import React, { Component } from 'react';
import Letter from './Letter/Letter';

class LetterWindow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chars: props.chars.split(''),
      start: props.start,
      end: props.end
    }
  }

  isActive(num) {
    return num >= this.state.start && num < this.state.end;
  }

  render() {
    return (
      <div className="letter-window">
        <div className="letters">
          {this.state.chars.map((c, i) => {
            return (
              <Letter value={c} active={this.isActive(i)} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default LetterWindow;