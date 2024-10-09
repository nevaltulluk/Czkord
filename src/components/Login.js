import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginSignup.css';

function Login() {
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
