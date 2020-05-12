import React from 'react';

import './Bar.css';

function Bar({ order, value, active, k }) {
  const barStyle = {
    height: (9*(Number(value)+1)) + "%"
  };

  return (
  <div className={`t400 bar p${order} ${active ? 'active' : ''}`} style={barStyle}>
    <h4>{value}</h4>
    <h5>{k === order ? "k": ""}{k-1 === order ? "k-1": ""}</h5>
    <h6>{order}</h6>
  </div>
  );
}

export default Bar;