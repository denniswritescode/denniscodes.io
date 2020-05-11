import React from 'react';
import './Experiments.css';

import ExperimentList from './ExperimentList/ExperimentList';

function Experiments() {
  return (
    <div className="experiments">

      <div className="ex-bg t200"></div>

      <div className="ex-bg-top t400">

        <ExperimentList />

      </div>

    </div>
  );
}

export default Experiments;
