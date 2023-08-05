import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Route/Home';
import NewPost from './Components/NewPost';
import ViewPostPage from './Components/ViewPostPage';
import Profile from './Route/Profile';
import SignUp from './Route/SignUp';
import SignIn from './Route/SignIn';
import ErrorPage from './Components/ErrorPage';
import Testing from './Components/Testing';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Routes>
        <Route index element={<Home/>} />
        <Route path='/newpost' element={<NewPost/>}/>
        <Route path='/viewpostpage' element={<ViewPostPage/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/testing' element={<Testing/>}/>
        <Route path='*' element={<ErrorPage/>}/>
        </Routes>
  </BrowserRouter>
  </>
);
