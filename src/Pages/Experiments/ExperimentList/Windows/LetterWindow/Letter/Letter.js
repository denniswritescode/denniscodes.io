import React from 'react';

import './Letter.css';

function Letter ({value, active}) {
  return (
    <div className={`letter-wrap middle-wrap ${active ? 'active' : ''}`}>
      <div className="letter-inner middle">
        <span>{value}</span>
      </div>
    </div>
  );
}


export default Letter;