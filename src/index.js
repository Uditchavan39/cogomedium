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
import SearchPage from './Route/SearchPage';
import Postsforme from './Route/Postsforme';
import SavedForMe from './Components/SavedForMe.';
import Lists from './Route/Lists';
import ListPostshow from './Components/Lists/ListPostshow';
import SubscriptionPayment from './Components/PaymentRelated/SubscriptionPayment';
import Success from './Components/PaymentRelated/Success';
import OtherProfile from './Route/OtherProfile';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Routes>
        <Route index element={<Home/>} />
        <Route path='/newpost' element={<NewPost/>}/>
        <Route path='/viewpostpage' element={<ViewPostPage/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/testing' element={<Testing/>}/>
        <Route path='/mylists' element={<Lists/>}/>
       <Route path='/listpostshow' element={<ListPostshow/>}/>
        <Route path='/savedforme' element={<SavedForMe/>}/>
        <Route path='/postsforme' element={<Postsforme/>}/>
        <Route path='/payment' element={<SubscriptionPayment/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/otherprofile' element={<OtherProfile/>}/>
        <Route path='*' element={<ErrorPage/>}/>
        </Routes>
  </BrowserRouter>
  </>
);
