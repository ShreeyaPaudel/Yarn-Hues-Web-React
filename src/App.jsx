import React, { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from './admin/AdminLogin';


function App() {

  const Login = React.lazy(() => import("./public/Login"));
  const Signup = React.lazy(() => import("./public/SignUp"));
  const Dashboard = React.lazy(() => import ("./private/Dashboard"));
  const EditProfile = React.lazy(() => import("./private/EditProfile"));
  const Designs = React.lazy (() => import ("./private/Designs"));
  const MainPage = React.lazy (() => import ("./public/MainPage"));
  const AboutUS = React.lazy (() => import ("./public/AboutUs"));
  const ContactUS = React.lazy (() => import ("./public/ContactUs"));
  const OrderPage = React.lazy (() => import ("./private/OrderPage"));
  const CheckoutPage = React.lazy (() => import ("./private/CheckoutPage"));
  const LastPage = React.lazy (() => import ("./private/LastPage"));

  const AdminDashboard = React.lazy (( ) => import ("./admin/AdminDashboard"));
  const AdminOrders = React.lazy (( ) => import ("./admin/AdminOrders"));
  const AdminProducts = React.lazy (( ) => import ("./admin/AdminProducts"));
  

 
  return (
    <Router>
    <Suspense fallback={<div>loading..</div>}>
       <Routes>
       <Route path='/' element={<Navigate to ="/mainpage"/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path = '/dashboard'element={<Dashboard/>}></Route>
        <Route path = '/editprofile' element ={<EditProfile/>}></Route>
        <Route path = '/designs'element ={<Designs/>}></Route>
        <Route path = '/mainpage' element ={<MainPage/>}></Route>
        <Route path = '/aboutus' element = {<AboutUS/>}></Route>
        <Route path = '/contactus' element = {<ContactUS/>}></Route>
        <Route path = '/order/:id' element = {<OrderPage/>}></Route>
        <Route path = '/checkoutpage' element = {<CheckoutPage/>}></Route>
        <Route path = '/lastpage' element = {<LastPage/>}></Route>
        
        <Route path ='/adminlogin' element ={<AdminLogin/>}></Route>
        <Route path = '/admindashboard' element = {<AdminDashboard/>}></Route>
        <Route path = '/adminorders' element = {<AdminOrders/>}></Route>
        <Route path = '/adminProducts' element = {<AdminProducts/>}></Route>
        
       
        
       </Routes>
      </Suspense>
      
      
    </Router>
  );
};

export default App
