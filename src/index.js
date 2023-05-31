import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FindAJob from './components/FindAJob'
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Jobs from './components/Jobs';
import PostAJob from './components/PostAJob';
import SignIn from './components/SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "home",
    element: <Home/>,
  },
  {
    path: "job",
    element: <Jobs/>,
  },
  {
    path: "/postjob",
    element: <PostAJob/>,
  },
  {
    path:"/signin",
    element: <SignIn />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
