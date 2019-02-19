import React from 'react';

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

};

function Header() {
  return (
    <div style={headerStyle}>
      <h1>My Neighborhood - Belo Horizonte - Brazil</h1>
    </div>
  );
}

export default Header;
