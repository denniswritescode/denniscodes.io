import React from 'react';
import Experiments from '../Experiments/Experiments';
import { Link, withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './Home.css';


function Home({ location }) {

  return ( 
    <div>

      <div className="middle-wrap">

        <div className="middle">

            <h1 className="main-title">

              Dennis&nbsp;

              <span className="acc-text does-code">

                <Link to="/experiments">codes</Link>

              </span>&nbsp;

              things. 

            </h1>

        </div>

      </div>

      <CSSTransition in={location.pathname.startsWith("/experiments")} timeout={750} appear>

        <Experiments />

      </CSSTransition>

    </div>
  );
}

export default withRouter(Home);