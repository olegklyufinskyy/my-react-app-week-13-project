import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const handleLogin = () => {
    
    
  };

  return (
    <div className="login-form">
      <h3 className="login-heading caligraphy">Log In</h3>

      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" placeholder="Enter your username" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter your password" />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
