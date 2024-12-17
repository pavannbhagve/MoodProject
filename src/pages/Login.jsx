import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve credentials from localStorage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    // Check if entered credentials match the ones in localStorage
    if (email === storedEmail && password === storedPassword) {
      navigate('/upload');  // Redirect to upload page if credentials match
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="relative min-h-screen bg-moon bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="flex items-center justify-center min-h-screen relative z-10">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md opacity-90">
          <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">Login to Your Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
 