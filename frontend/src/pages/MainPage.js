import React from 'react';
import { Login } from '../components/buttons';
import { LoginHandler } from '../components/buttonHandlers';

function MainPage() {
  const handleLogin = LoginHandler();

  return (
    <div>
      <Login text="Login" onClick={handleLogin} />
      <h1>Welcome to My pet App</h1>
    </div>
  );
}

export default MainPage;
