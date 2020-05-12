import React from 'react';
import './Experiments.css';
import { Route, withRouter, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import '../../Shared/SingleExperiment/SingleExperiment.css';
import ExperimentList from './ExperimentList/ExperimentList';
import InsertSort from './ExperimentList/Sorting/InsertSort/InsertSort';
import Close from '../../Shared/Assets/Close.svg';

function Experiments({ location }) {
  return (

    <div className="experiments">

      <CSSTransition
        in={location.pathname == "/experiments/insert-sort"}
        timeout={400}
        classNames={"full"}
        appear
      >

        <div>

          <div className="ex-bg t200"></div>

          <div className="ex-container t400">

            <Route exact path="/experiments" component={ExperimentList} />

            <Route exact path="/experiments/insert-sort" component={InsertSort} />

            <div className="close t600">

              <Link 
                to={location.pathname === "/experiments" ? "/" : "/experiments"}
              >

                <img src={Close} />

              </Link>

            </div>

          </div>

        </div>

      </CSSTransition>

    </div>

  );
}

export default withRouter(Experiments);
