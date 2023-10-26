import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import './index.css'
import Home from './components/Home/Home'
import PasswordGenerator from './components/PasswordGenerator'
import BgMain from './BgMain'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path:"",
        element: <Home />
      },
      {
        path:"/passwordgenerator",
        element: <PasswordGenerator />
      },
      {
        path:'bgChanger',
        element: <BgMain />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
