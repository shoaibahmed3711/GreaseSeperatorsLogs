import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer';

// Lazy-loaded components
const Dashboard = React.lazy(() => import('./pages/dashboard/Dashboard'));
const Help = React.lazy(() => import('./pages/Help/Help'));
const Pricing = React.lazy(() => import('./pages/Pricing/Pricing'));
const Problems = React.lazy(() => import('./pages/Problem/Problems'));
const Login = React.lazy(() => import('./pages/Login/Login'));
const Analytics = React.lazy(() => import('./pages/dashboard/pages/Analytics'));
const Report = React.lazy(() => import('./pages/dashboard/pages/Report'));
const Messages = React.lazy(() => import('./pages/dashboard/pages/Messages'));
const Repository = React.lazy(() => import('./pages/dashboard/pages/Repository')); // Corrected typo: Repositary to Repository
const Logs = React.lazy(() => import('./pages/dashboard/pages/Logs'));
const Feedback = React.lazy(() => import('./pages/Feedback/Feedback'));
const SubscriptionForm = React.lazy(() => import('./pages/Pricing/SubscriptionForm'));
const Chat = React.lazy(() => import('./pages/Help/Chat'));
const SubFormYear = React.lazy(() => import('./pages/Pricing/SubFormYear'));

// Define the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
        <Analytics />
      </Suspense>
    ),
  },
  {
    path: "/help",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Help />
        <Footer />
      </Suspense>
    ),
  },
  {
    path: "/feedback",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Feedback />
        <Footer />
      </Suspense>
    ),
  },
  {
    path: "/problems",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Problems />
        <Footer />
      </Suspense>
    ),
  },
  {
    path: "/pricing",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Pricing />
        <Footer />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/analytics",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
        <Analytics />
      </Suspense>
    ),
  },
  {
    path: "/report",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
        <Report />
      </Suspense>
    ),
  },
  {
    path: "/messages",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
        <Messages />
      </Suspense>
    ),
  },
  {
    path: "/repository", // Corrected typo: Repositary to Repository
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
        <Repository />
      </Suspense>
    ),
  },
  {
    path: "/logs",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
        <Logs />
      </Suspense>
    ),
  },
  {
    path: "/subscription-form",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <SubscriptionForm />
        <Footer />
      </Suspense>
    ),
  },
  {
    path: "/sub-form-year",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <SubFormYear />
        <Footer />
      </Suspense>
    ),
  },
  {
    path: "/chat",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Chat />
        <Footer />
      </Suspense>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
