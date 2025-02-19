import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Detail from './Views/Details/detail';
import App from './Views/Home/App';
import Update from './Views/Update/update';
import Add from './Views/Add/add';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));  
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/details/:id',
    element:<Detail/>
  },
  {
    path:'/add',
    element:<Add/>
  },
  {
    path:'/update/:id',
    element:<Update/>
  }
])
root.render(<RouterProvider router={router}/>)

