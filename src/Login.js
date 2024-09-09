import { React, useState,  useContext } from 'react';
import {  useNavigate, Link } from 'react-router-dom';
import './login.css'


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      
      console.log('Username:', username);
      console.log('Password:', password);
    };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Link className='link' to='/signup'>New User?</Link>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
