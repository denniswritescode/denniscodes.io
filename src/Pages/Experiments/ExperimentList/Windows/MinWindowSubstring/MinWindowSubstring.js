import React, { Component } from 'react';
import LetterWindow from '../LetterWindow/LetterWindow';

import './MinWindowSubstring.css';

class MinWindowSubstring extends Component {

  constructor(props) {
    super(props);
    let seed = 'CODEBAEDC';

    this.debug = false;

    this.state = {
      chars: seed,
      start: 1,
      end: 3,
      target: 'CDE'
    }
  }

  render () {
    return (
      <div className="single-experiment min-window-substring">

        <h3>Minimum Window Substring</h3>

        <p>A visualization of the <a href="https://leetcode.com/problems/minimum-window-substring/" target="_blank" rel="noopener noreferrer">76th LeetCode Problem</a>.</p>

        {this.debug ?
          <LetterWindow
            chars={this.state.chars}
            start={this.state.start}
            end={this.state.end}
          /> : <p className="coming-soon">Soon, still working on it ;)</p>
        }

      </div>
    );
  }
}

export default MinWindowSubstring;