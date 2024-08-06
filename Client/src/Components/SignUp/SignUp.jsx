import React, { useState } from 'react';

const SignUp = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validatePasswords = () => {
    let isValid = true;

    if (password.length < 8 || password.length > 15) {
      setPasswordError('Password must be between 8 and 15 characters long.');
      isValid = false;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError('Password must contain at least one uppercase letter.');
      isValid = false;
    } else if (!/[a-z]/.test(password)) {
      setPasswordError('Password must contain at least one lowercase letter.');
      isValid = false;
    } else if (!/[0-9]/.test(password)) {
      setPasswordError('Password must contain at least one number.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePasswords()) {
      // Proceed with signup logic
      console.log('Sign up successful');
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#121212',
      width: '100vw',
    },
    box: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: '400px',
      padding: '40px',
      textAlign: 'center',
      color: 'white',
      backgroundColor: '#1c1c1c',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    inputBox: {
      width: '80%',
      padding: '10px',
      margin: '10px 0',
      border: '1px solid #ccc',
      borderRadius: '4px',
      backgroundColor: '#333',
      color: '#fff',
    },
    signupButton: {
      width: '50%',
      padding: '10px',
      backgroundColor: '#1DB954',
      color: 'white',
      border: 'none',
      borderRadius: '20px',
      cursor: 'pointer',
      marginTop: '20px',
    },
    errorText: {
      color: 'red',
      marginTop: '5px',
      marginBottom: '10px',
      fontSize: '0.875rem',
    },
    loginText: {
      color: 'rgba(255, 255, 255, 0.6)',
      marginTop: '10px',
    },
    loginLink: {
      color: 'white',
      textDecoration: 'none',
      marginLeft: '5px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>Sign up to start listening</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Name" style={styles.inputBox} required />
          <input type="email" placeholder="name@domain.com" style={styles.inputBox} required />
          <input
            type="password"
            placeholder="Enter Password"
            style={styles.inputBox}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            maxLength="15"
            required
          />
          {passwordError && <p style={styles.errorText}>{passwordError}</p>}
          <input
            type="password"
            placeholder="Confirm Password"
            style={styles.inputBox}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            maxLength="15"
            required
          />
          {confirmPasswordError && <p style={styles.errorText}>{confirmPasswordError}</p>}
          <button type="submit" style={styles.signupButton}><a href="/Login">Create</a></button>
        </form>
        <div style={styles.loginText}>
          Already have an account? <a href="/Login" style={styles.loginLink}>Login for Decibels</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;