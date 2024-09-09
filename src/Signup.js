import { React, useState,  useContext } from 'react';
import {  useNavigate, Link } from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
  
    const handleSignup = (e) => {
      e.preventDefault();
      
      console.log('Username:', username);
      console.log('Password:', password);
    };
  

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h1>Sign-up</h1>
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label htmlFor="username">New Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Create a Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
         
          <Link className='link' to='/'>Existing User?</Link>
          <button type="submit">Sign-up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
