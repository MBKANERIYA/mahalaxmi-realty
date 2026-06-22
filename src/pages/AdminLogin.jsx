import React, { useState } from 'react';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      window.location.hash = '#/admin/dashboard';
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen d-flex align-items-center justify-content-center bg-light">
      <div className="card p-5 shadow-sm border-0 rounded-4" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ color: 'var(--theme-primary)' }}>Admin Login</h2>
          <p className="text-secondary small">Sign in to manage properties</p>
        </div>
        
        {error && <div className="alert alert-danger py-2 px-3 small">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label small fw-medium text-secondary">Username</label>
            <input 
              type="text" 
              className="form-control px-3 py-2 border-1 shadow-none" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label small fw-medium text-secondary">Password</label>
            <input 
              type="password" 
              className="form-control px-3 py-2 border-1 shadow-none" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn w-100 fw-bold py-2 text-white" style={{ backgroundColor: 'var(--theme-primary)' }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
