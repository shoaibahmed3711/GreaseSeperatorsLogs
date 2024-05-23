import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import Help from './pages/Help/Help';
import Pricing from './pages/Pricing/Pricing';
import Problems from './pages/Problem/Problems';
import Login from './pages/Login/Login';
import Analytics from './pages/dashboard/pages/Analytics';
import Report from './pages/dashboard/pages/Report';
import Messages from './pages/dashboard/pages/Messages';
import Repositary from './pages/dashboard/pages/Repositary';
import Logs from './pages/dashboard/pages/Logs';
import Feedback from './pages/Feedback/Feedback';
import SubscriptionForm from './pages/Pricing/SubscriptionForm';
import Chat from './pages/Help/Chat';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <>
        <Dashboard />
        <Analytics />
      </>
    ),
  },
  {
    path: "/Help",
    element: (
      <>
        <Header />
        <Help />
      </>
    ),
  },
  {
    path: "/Feedback",
    element: (
      <>
        <Header />
        <Feedback />
      </>
    ),
  },
  {
    path: "/Problems",
    element: (
      <>
        <Header />
        <Problems />
      </>
    ),
  },
  {
    path: "/Pricing",
    element: (
      <>
        <Header />
        <Pricing />
      </>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Analytics",
    element: (
      <>
        <Dashboard />
        <Analytics />
      </>
    ),
  },
  {
    path: "/Report",
    element: (
      <>
        <Dashboard />
        <Report />
      </>
    ),
  },
  {
    path: "/Messages",
    element: (
      <>
        <Dashboard />
        <Messages />
      </>
    ),
  },
  {
    path: "/Repositary",
    element: (
      <>
        <Dashboard />
        <Repositary />
      </>
    ),
  },
  {
    path: "/logs",
    element: (
      <>
        <Dashboard />
        <Logs />
      </>
    ),
  },
  {
    path: "/SubscriptionForm",
    element:<><Header /><SubscriptionForm /></> ,
  },
  {
    path: "/Chat",
    element: (
      <>
        <Header />
        <Chat />
      </>
    ),
  },
]);

function App() {
  return (
      <RouterProvider router={router} />

  );
}

export default App;
