import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Your login logic here
    if (email && password) {
      navigate('/upload');  // Redirect to Upload page
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
