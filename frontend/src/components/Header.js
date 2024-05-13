import React from 'react';
import Sidebar from './sidebar';

function Header() {
  return (
    <header className="App-header">
       <Sidebar />
      <h1>Welcome to My Pet Care App!</h1>
    </header>
  );
}

export default Header;