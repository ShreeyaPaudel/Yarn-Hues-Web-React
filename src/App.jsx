import React, { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {

  const Login = React.lazy(() => import("./public/Login"));
  const Signup = React.lazy(() => import("./public/SignUp"));
  const Dashboard = React.lazy(() => import ("./private/Dashboard"));
  const EditProfile = React.lazy(() => import("./private/EditProfile"));
  const Designs = React.lazy (() => import ("./private/Designs"));
  const MainPage = React.lazy (() => import ("./public/MainPage"));

 
  return (
    <Router>
    <Suspense fallback={<div>loading..</div>}>
       <Routes>
       <Route path='/' element={<Navigate to ="/login"/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path = '/dashboard'element={<Dashboard/>}></Route>
        <Route path = '/editprofile' element ={<EditProfile/>}></Route>
        <Route path = '/designs'element ={<Designs/>}></Route>
        <Route path = '/mainpage' element ={<MainPage/>}></Route>
        
       </Routes>
      </Suspense>
      
      
    </Router>
  );
};

export default App
