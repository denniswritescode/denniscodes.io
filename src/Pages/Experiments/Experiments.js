import React from 'react';
import './Experiments.css';
import { Route, withRouter, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import '../../Shared/SingleExperiment/SingleExperiment.css';
import ExperimentList from './ExperimentList/ExperimentList';
import InsertSort from './ExperimentList/Sorting/InsertSort/InsertSort';
import Close from '../../Shared/Assets/Close.svg';
import MinWindowSubstring from './ExperimentList/Windows/MinWindowSubstring/MinWindowSubstring';

function Experiments({ location }) {
  return (

    <div className="experiments">

      <CSSTransition
        in={/\/experiments\/[a-zA-Z]{1,}/.test(location.pathname)}
        timeout={400}
        classNames={"full"}
        appear
      >

        <div>

          <div className="ex-bg t200"></div>

          <div className="ex-container t400">

            <Route exact path="/experiments" component={ExperimentList} />

            <Route exact path="/experiments/insert-sort" component={InsertSort} />

            <Route exact path="/experiments/min-window-substring" component={MinWindowSubstring} />

            <div className="close t200">

              <Link 
                to={location.pathname === "/experiments" ? "/" : "/experiments"}
              >

                <img src={Close} alt="close panel" />

              </Link>

            </div>

          </div>

        </div>

      </CSSTransition>

    </div>

  );
}

export default withRouter(Experiments);
