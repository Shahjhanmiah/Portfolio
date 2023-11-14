import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider,  } from "react-router-dom";
import "./index.css";
import { router } from './Sharing/Route.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
