import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Allcourse from './Component/Allcourse';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

  },
  {
    path: 'all-courses',
    element: <Allcourse></Allcourse>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
