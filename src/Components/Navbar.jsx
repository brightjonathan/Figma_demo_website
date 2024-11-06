import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({GoogleSignOut, isAuth}) => {


  return (
    <nav className="nav">
       <Link to='/'>Blogs</Link>

       {
        !isAuth ? ( <Link to='/login'>Login</Link> ) : ( 
        <> 
        <Link to='#'>Create Post</ Link>
        <button className="login-btn" onClick={GoogleSignOut}>Sign Out</button>
        </> )
       }
       
    </nav>
  )
};

export default Navbar;
