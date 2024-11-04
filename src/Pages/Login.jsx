import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='mt-[10vh]'>

      <h2>Login page </h2>
      Don't have an account? <Link to={'/register'}> sign up </Link>

    </div>
  )
}

export default Login;
