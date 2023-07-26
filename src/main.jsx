import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import { Portaid } from './components/Portaid'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './components/App';



const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Portaid />

    },
    {
      path: '/home',
      element: <App />

    }

  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>


)
