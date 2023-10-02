import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRout from './route/MainRout.jsx'
import Authprovider from './components/AuthProvider/Authprovider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <RouterProvider router={MainRout}>
    </RouterProvider>
    </Authprovider>
  </React.StrictMode>,
)
