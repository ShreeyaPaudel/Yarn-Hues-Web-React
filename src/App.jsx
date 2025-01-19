import React, { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {

  const Login = React.lazy(() => import("./public/Login"));
  const Signup = React.lazy(() => import("./public/SignUp"));
 
  return (
    <Router>
    <Suspense fallback={<div>loading..</div>}>
       <Routes>
       <Route path='/' element={<Navigate to ="/login"/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        
       </Routes>
      </Suspense>
      
      
    </Router>
  );
};

export default App
