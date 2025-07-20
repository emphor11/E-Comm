import React from 'react'
import './CSS/loginSignUp.css'

function LoginSignUp() {
  return (
    <div className='loginSignuo'>
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="logimSignup-fields">
          <input type='text' placeholder='Enter Your Name' />
          <input type='email' placeholder='Enter Your Email'/>
          <input type='password' placeholder='Enter Your Password'/>
        </div>
        <button>Continue</button>
        <p className="loginSignup-login">Already have an Account? <span>Login here</span> </p>
        <div className="loginSignup-agree">
          <input type='checkbox' name='' id=''/>
          <p>By continuing, i agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp