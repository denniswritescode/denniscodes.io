import React, { Component } from 'react';
import LetterWindow from '../LetterWindow/LetterWindow';

import './MinWindowSubstring.css';

class MinWindowSubstring extends Component {

  constructor(props) {
    super(props);
    let chars = 'CODEBAEDC';
    let target = 'CDE';
    let [table, missing] = this.makeTable(target);

    this.debug = true;
    this.ans = [];

    this.increment = this.increment.bind(this);
    this.algorithm = this.algorithm.bind(this);

    this.state = this.algorithm({
      iteration: 0,
      chars: chars,
      left: 0,
      right: 0,
      target: target,
      table: table,
      missing: missing,
      done: false
    });
  }

  algorithm(state) {
    let { chars, left, right, target, table, missing, iteration, done } = state;

    // we're done processing
    if(right >= chars.length) {
      state.done = true;
      return state;
    }
    
    if(missing === 0) {

      this.ans.push({
        window: chars.substring(left, right+1),
        range: [left, right]
      });
      
      // CONTRACT WINDOW
      if(iteration > 0) left++;
      
      let l = chars[left-1];
      if(l in table) {
        if(table[l]++ > -1) missing++;
      }

    } else {
      // EXPAND WINDOW
      if(iteration > 0) right++;

      let r = chars[right];
      if(r in table) {
        if(table[r]-- > 0) missing--;
      }
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
          
        </div>

        <div className="meta">

          <dt>Not Found:</dt><dd>{this.state.missing}</dd>
          <dt>Left:</dt><dd>{this.state.left}</dd>
          <dt>Right:</dt><dd>{this.state.right}</dd>
          {Object.entries(this.state.table).map((e, i) => {
            return (
              <div key={i}>
                <dt>{e[0]}</dt><dd>{e[1]}</dd>
              </div>
            )
          })}
          <div>
            <dt>Ans</dt><dd>{JSON.stringify(this.ans)}</dd>
          </div>

        </div>

        {this.debug ?
          <LetterWindow
            chars={this.state.chars}
            left={this.state.left}
            right={this.state.right}
            desirable={this.state.missing === 0}
          /> : <p className="coming-soon">Soon, still working on it ;)</p>
        }

      </div>
    );
  }
}

export default MinWindowSubstring;