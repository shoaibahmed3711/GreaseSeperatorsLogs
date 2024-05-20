import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home/Home'
import Dashboard from './pages/dashboard/Dashboard'
import Help from './pages/Help/Help';
import Pricing from './pages/Pricing/Pricing';
import Problems from './pages/Problem/Problems';
import Login from './pages/Login/Login'
import Analytics from './pages/dashboard/pages/Analytics';
import Report from './pages/dashboard/pages/Report';
import Integration from './pages/dashboard/pages/Integration';
import Repositary from './pages/dashboard/pages/Repositary';
import Logs from './pages/dashboard/pages/Logs';
import Feedback from './pages/Feedback/Feedback';

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header /><Home /></>  ,
    },
    {
      path: "/dashboard",
      element: <><Header /><Dashboard /><Analytics /></>  ,
    },
    {
      path: "/Help",
      element: <><Header /><Help /></>  ,
    },
    {
      path: "/Feedback",
      element: <><Header /><Feedback /></>  ,
    },
    {
      path: "/Problems",
      element: <><Header /><Problems /></>  ,
    },
    {
      path: "/Pricing",
      element: <><Header /><Pricing /></>  ,
    },
    {
      path: "/login",
      element: <><Login /></>  ,
    },
    {
      path: "/Analytics",
      element: <><Header /><Dashboard /><Analytics /></>  ,
    },
    {
      path: "/Report",
      element: <><Header /><Dashboard /><Report /></>  ,
    },
    {
      path: "/Integration",
      element: <><Header /><Dashboard /><Integration /></>  ,
    },
    {
      path: "/Repositary",
      element: <><Header /><Dashboard /><Repositary /></>  ,
    },
    {
      path: "/logs",
      element: <><Header /><Dashboard /><Logs /></>  ,
    },
  ])

  return (
    <>
      <RouterProvider router={router} /> 
    </>
  )
}

export default App