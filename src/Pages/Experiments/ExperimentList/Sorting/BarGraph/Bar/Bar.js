import React from 'react';

import './Bar.css';

function Bar({ order, value, active, k }) {
  const barStyle = {
    height: (9*(Number(value)+1)) + "%"
  };

  return (
  <div className={`t200 bar p${order} ${active ? 'active' : ''}`} style={barStyle}>
    <h4>{value}</h4>
  </div>
  );
}

export default Bar;