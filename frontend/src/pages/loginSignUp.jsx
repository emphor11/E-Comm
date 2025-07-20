import React, { useState } from 'react';
import './CSS/loginSignUp.css';

function LoginSignUp() {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const payload = isLogin 
        ? { email: formData.email, password: formData.password }
        : formData;

      const response = await fetch(`http://localhost:3001${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        // Store token in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        setSuccess(data.message);
        
        // Reset form
        setFormData({ name: '', email: '', password: '' });
        
        // Redirect or update app state here
        console.log('Authentication successful:', data);
        
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (error) {
      setError('Network error. Please try again.');
      console.error('Auth error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='loginSignuo'>
      <div className="loginSignup-container">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="logimSignup-fields">
            {!isLogin && (
              <input 
                type='text' 
                name='name'
                placeholder='Enter Your Name'
                value={formData.name}
                onChange={handleInputChange}
                required={!isLogin}
              />
            )}
            <input 
              type='email' 
              name='email'
              placeholder='Enter Your Email'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input 
              type='password' 
              name='password'
              placeholder='Enter Your Password'
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <button type="submit" disabled={loading}>
            {loading ? 'Processing...' : 'Continue'}
          </button>
        </form>
        
        <p className="loginSignup-login">
          {isLogin ? "Don't have an account? " : "Already have an Account? "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign up here' : 'Login here'}
          </span>
        </p>
        
        {!isLogin && (
          <div className="loginSignup-agree">
            <input type='checkbox' name='' id='' required/>
            <p>By continuing, I agree to the terms of use and privacy policy.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginSignUp;