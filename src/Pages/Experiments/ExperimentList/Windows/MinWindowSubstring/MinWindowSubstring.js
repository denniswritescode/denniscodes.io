import React, { Component } from 'react';
import LetterWindow from '../LetterWindow/LetterWindow';

import './MinWindowSubstring.css';

const CHARS = 'ZCODEBAEDC';
const TARGET = 'CDE';

class MinWindowSubstring extends Component {

  constructor(props) {
    super(props);
    let [table, missing] = this.makeTable(TARGET);

    this.debug = true;
    this.ans = [];

    this.increment = this.increment.bind(this);
    this.algorithm = this.algorithm.bind(this);
    this.reset = this.reset.bind(this);

    this.state = this.algorithm({
      iteration: 0,
      chars: CHARS,
      left: 0,
      right: 0,
      target: TARGET,
      table: table,
      missing: missing,
      done: false
    });
  }

  reset() {
    this.ans = [];

    this.setState((state) => {
      let [table, missing] = this.makeTable(TARGET);
      
      return this.algorithm({
        iteration: 0,
        chars: CHARS,
        left: 0,
        right: 0,
        target: TARGET,
        table: table,
        missing: missing,
        done: false
      });
    });
  }

  algorithm(state) {
    let { chars, left, right, target, table, missing, iteration, done } = state;

    // we're done processing
    if(right >= chars.length) {
      state.done = true;
      return state;
    }
    
    // If no missing characters...
    if(missing === 0) {
      // contract window...     (on the first iteration we only perform checks, no window adjustments)
      if(iteration > 0) left++;
      
      let l = chars[left-1];
      if(l in table) {
        if(table[l]++ > -1) missing++;
      }

    } else {
      // expand window...     (on the first iteration we only perform checks, no window adjustments)
      if(iteration > 0) right++;

      let r = chars[right];
      if(r in table) {
        if(table[r]-- > 0) missing--;
      }
    }

    // Check for answers
    if(missing === 0) {
      this.ans.push({
        window: chars.substring(left, right+1),
        range: [left, right]
      });
    }

    iteration++;
    return { chars, left, right, target, table, missing, iteration, done };
  }

  makeTable(s) {
    let len = s.length;
    let i = 0;
    let table = {};
    let missing = 0;

    for(; i < len; i++) {
      if(table[s[i]]) {
        table[s[i]]++;
      } else {
        table[s[i]] = 1;
      }
      missing++; 
    }

    return [table, missing];
  }

  increment() {
    this.setState(this.algorithm);
  }

  render () {
    return (
      <div className="single-experiment min-window-substring">

        <h3>Minimum Window Substring</h3>

        <p>A visualization of the <a href="https://leetcode.com/problems/minimum-window-substring/" target="_blank" rel="noopener noreferrer">76th LeetCode Problem</a>.</p>

        <div className="button-group">

          <button
            onClick={this.increment}
            disabled={this.state.right >= this.state.chars.length}
          >increment</button>

          <button
            onClick={this.reset}
          >reset</button>
          
        </div>

        <LetterWindow
          chars={this.state.chars}
          left={this.state.left}
          right={this.state.right}
          desirable={this.state.missing === 0}
        />

      </div>
    );
  }
}

export default MinWindowSubstring;