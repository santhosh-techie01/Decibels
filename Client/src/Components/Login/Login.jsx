import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validatePassword = () => {
    if (password.length < 8 || password.length > 15) {
      setPasswordError('Password must be between 8 and 15 characters long.');
      return false;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError('Password must contain at least one uppercase letter.');
      return false;
    } else if (!/[a-z]/.test(password)) {
      setPasswordError('Password must contain at least one lowercase letter.');
      return false;
    } else if (!/[0-9]/.test(password)) {
      setPasswordError('Password must contain at least one number.');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePassword()) {
      // Add your authentication logic here
      if ((emailOrUsername === 'user@example.com' || emailOrUsername === 'username') && password === 'password') {
        onLogin();
      } else {
        setError('Invalid email/username or password');
      }
    }
  };

  return (
    <div>
      <style jsx="true">{`
        body {
          background-color: black;
          margin: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Arial, sans-serif;
        }
        .login-container {
          width: 300px;
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 30px;
          background-color: rgba(0, 0, 0, 0.8); /* Dark transparent background */
          color: white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        .login-container h2 {
          text-align: center;
          margin-bottom: 20px;
        }
        .login-container form {
          display: flex;
          flex-direction: column;
        }
        .login-container .form-group {
          margin-bottom: 15px;
        }
        .login-container label {
          margin-bottom: 5px;
          font-weight: bold;
        }
        .login-container input[type="text"],
        .login-container input[type="password"] {
          width: 90%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent background for inputs */
          color: white;
        }
        .login-container .error {
          color: red;
          margin-bottom: 10px;
          text-align: center;
        }
        .login-container .password-error {
          color: red;
          margin-top: 5px;
          margin-bottom: 10px;
          font-size: 0.875rem;
        }
        .login-container button {
          padding: 10px;
          background-color: #1DB954; /* Spotify green color */
          color: white;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          font-weight: bold;
        }
        .login-container button:hover {
          background-color: #1AA34A;
        }
        .login-container a {
          color: white;
          text-align: center;
          display: block;
          margin-top: 10px;
          text-decoration: none;
        }
        .login-container a:hover {
          text-decoration: underline;
        }
        .login-container .remember-me {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }
        .login-container .remember-me input {
          margin-right: 5px;
        }
        .login-container .remember-me label {
          margin: 0;
        }
        .login-container .signup-container {
          margin-top: 10px;
          text-align: center;
          color: rgba(255, 255, 255, 0.6); /* Lightly transparent text */
        }
      `}</style>
      <div className="login-container">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email or username</label>
            <input
              type="text"
              placeholder="Email or username"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              maxLength="15"
              required
            />
            {passwordError && <p className="password-error">{passwordError}</p>}
          </div>
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button type="submit" href="/Landing">Log In</button>
        </form>
        <a href="#">Forgot your password?</a>
        <div className="signup-container">
          Don't have an account? <a href="/">Sign up for Decibels</a>
        </div>
      </div>
    </div>
  );
};

export default Login;