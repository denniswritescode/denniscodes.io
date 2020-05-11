import React from 'react';
import Experiments from '../Experiments/Experiments';
import { CSSTransition } from 'react-transition-group';
import './Home.css';


function Home() {
  const [showExp, setShowExp] = React.useState(false);

  return ( 
    <div>

      <div className="middle-wrap">

        <div className="middle">

            <h1 className="main-title">

              Dennis&nbsp;

              <span className="acc-text does-code" onClick={()=>{setShowExp(show=>!show)}}>
                codes
              </span>&nbsp;

              things. 

            </h1>

        </div>

      </div>

      <CSSTransition in={showExp} timeout={750}>

        <Experiments />

      </CSSTransition>

    </div>
  );
}

export default Home;