import React, { Component } from 'react';

import './InsertSort.css';
import BarGraph from '../BarGraph/BarGraph';

class InsertSort extends Component {

  constructor(props) {
    super(props);

    this.sortOne = this.sortOne.bind(this);
    this.startSort = this.startSort.bind(this);
    this.mixBars = this.mixBars.bind(this);
    this.sorted = false;
    this.sorting = false;
    this.interval = undefined;

    let bars = this.createMix();

    this.state = {
      bars: bars,
      num: cp(bars[1]),
      i: 1,
      k: 1,
      speed: 200
    }; 
  }

  swapProps(obj1, obj2, key) {
    let tmp = obj1[key];
    obj1[key] = obj2[key];
    obj2[key] = tmp;
  }

  startSort() {
    this.sortOne();
    this.sorting = true;

    this.interval = setInterval(() => {
      this.sortOne();
    }, this.state.speed);
  }

  sortOne() {
    this.setState((state) => {

      if(state.i >= state.bars.length) {
        this.sorted = true;
        this.sorting = false;
        clearInterval(this.interval);
        return state;
      }

      let bars = state.bars.slice();
      let i = state.i;
      let k = state.k;
      let num = state.num;

      if(k > 0) {
        if(bars.find(o(k-1)).value > num.value) {
          this.swapProps(bars.find(o(k)), bars.find(o(k-1)), 'order');
          k--;
        }
      }

      if(k <= 0 || bars.find(o(k-1)).value < num.value) {
        let b = bars.find(o(k));
        b.value = num.value;
        i++;
        k = i;
        num = bars.find(o(k));
      }

      return {
        bars: bars,
        i: i,
        k: k,
        num: num
      };
    });
  }

  createMix() {
    const seed = '0123456789'; 
    let bars = seed
                .split('')
                .sort(() => Math.random() - 0.5)
                .map((b, i) => {
                  return { order: i, key: i, value: Number(b), active: false }
                });
    return bars;
  }

  mixBars() {
    this.setState(() => {
      let bars = this.createMix();
      this.sorted = false;

      return { bars: bars, k: 1, i: 1, num: cp(bars[1]) };
    });
  }

  render() {
    return (

      <div className="single-experiment">

        <h3>Insert Sort Visualizer</h3>

        <div className="button-group">

          <button className="isort-move" onClick={this.startSort}>Sort</button>

          <button className="isort-move" onClick={this.sortOne}>Increment</button>

          <button className="isort-move" onClick={this.mixBars}>Mix</button>

        </div>

        <div className="slider-group">

          <label>Speed: {this.state.speed} milliseconds</label><br />
          <input
            type="range"
            min="100" max="2000"
            defaultValue={this.state.speed} 
            onChange={(e) => this.setState({speed: e.target.value})}
            step="100"
          /> 

        </div>

        <div className="sort-graph">

          <BarGraph bars={this.state.bars} active={this.state.num?.value} k={this.state.k} />

        </div>

        <h2 className="sorted">{this.sorted ? "SORTED" : ""}</h2>

      </div>

    );
  }
}

function cp(obj) {
  return Object.assign({}, obj);
}

function o(num) {
  return function(e) {
    return e.order === num;
  }
}

export default InsertSort;
