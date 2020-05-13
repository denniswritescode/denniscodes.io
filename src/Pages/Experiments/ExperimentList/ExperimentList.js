import React from 'react';
import { Link } from 'react-router-dom';

function ExperimentList() {
  return (
    <div className="experiment-list">

      <h2 className="t600">Experiments</h2>

      <p className="t600">I work on Javascript/algorithm experiments from time to time. Here are a few.</p>

      <ul className="t600">

        <li>
          
          <Link to="/experiments/insert-sort">Insertion Sort</Link>

        </li>

        <li>

          <Link to="/experiments/min-window-substring">Minimum Window Substring</Link>

        </li>

      </ul>

    </div>
  );
}

export default ExperimentList;
