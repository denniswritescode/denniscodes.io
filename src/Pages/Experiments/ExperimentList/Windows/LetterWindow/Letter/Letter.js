import React from 'react';

import './Letter.css';

function Letter ({value, active, index, isLeft, isRight, desirable}) {
  return (
    <div className="letter-col">
      <div className="top">
        {isRight ? <div className="down-tri"></div> : <div className="clear-tri"></div>}
      </div>
      <div className={`letter-wrap middle-wrap ${active ? 'active' : ''} ${desirable ? 'desirable' : ''}`}>
        <div className="letter-inner middle">
          <span>{value}</span>
        </div>
      </div>
      <div className="bottom">
        {isLeft ? <div className="up-tri"></div> : <div className="clear-tri"></div>}
        <div className="letter-index">{index}</div>
      </div>
    </div>
  );
}


export default Letter;