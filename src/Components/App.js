import React from 'react';
import NavBar from './Navbar/NavBar';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Login from './Login/Login';
import People from './People/People'
import Register from './Register/Register';
import TvShows from './TvShows/TvShows';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import Movies from './Movies/Movies';
const App = () => {
  return (
    <div>
      
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='movies' element={<Movies/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='people' element={<People/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='tvshowes' element={<TvShows/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
