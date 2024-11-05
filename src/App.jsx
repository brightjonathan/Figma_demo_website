import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';




const App = () => {


  return (
   <div>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={ <Login/>}/>
    </Routes>   


   </div>
  )
}

export default App;

