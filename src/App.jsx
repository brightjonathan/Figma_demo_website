import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { auth } from './Firebase/Firebase-config';
import { signOut} from 'firebase/auth';
import CreatePost from './Pages/CreatePost';


const App = () => {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('is-Auth'));


  //signOut functionality...
  const GoogleSignOut =()=>{
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/login';
    })
  };


  return (
   <div>
    <Navbar GoogleSignOut={GoogleSignOut} isAuth={isAuth} />

    <Routes>
      <Route path='/' element={<Home isAuth={isAuth} />} />
      <Route path='/login' element={ <Login setIsAuth={setIsAuth} />} />
      <Route path='/create-post' element={<CreatePost isAuth={isAuth} /> }/>
    </Routes>

   </div>
  )
}

export default App;

