import React from 'react';

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

};

const thirdDataStyle = {
  fontSize: '12px',

};

function Header() {
  return (
    <div style={headerStyle}>
      <h1>My Neighborhood - Belo Horizonte - Brazil</h1>
      <h2 style={thirdDataStyle}>This project uses data from Google Maps and Wikipedia</h2>
    </div>
  );
}

export default Header;
