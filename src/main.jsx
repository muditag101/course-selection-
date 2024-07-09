import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CourseDetails from './components/courseDetails.jsx';
import Dashboard from './components/dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error 404 not found</div>
  },
  {
    path: "/course/:id",
    element: <CourseDetails />,
    errorElement: <div>Error 404 not found</div>
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <div>Error 404 not found</div>
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)