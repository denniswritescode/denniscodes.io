import React, { Component } from 'react';


class MinWindowSubstring extends Component {

  constructor(props) {
    super(props);
    let seed = 'ADOBECODEBAXNCYOUOUHIOABCIUO';


    this.state = {
      bars: seed.split(''),
      target: 'ABC'
    }
  }

  render () {
    return (
      <div className="single-experiment insert-sort">

        <h3>Minimum Window Substring</h3>

        <p>A visualization of the <a href="https://leetcode.com/problems/minimum-window-substring/" target="_blank" rel="noopener noreferrer">76th LeetCode Problem</a>.</p>

        <p className="coming-soon">(coming soon)</p>

      </div>
    );
  }
}

export default MinWindowSubstring;