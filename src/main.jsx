import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './component/Home.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './component/contact.jsx'
import About from './component/about.jsx'
import User from './component/Users.jsx'
import UserDetails from './UserDetails.jsx'
import Users from './component/Users.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children:
      [
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/user',
          //sends data to child component
          loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
          element: <Users></Users>
        },
        {
          //ei path er mane : er por ekta number thakbe jeta dynamically change hbe
          path: '/user/:userId',
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
          element: <UserDetails></UserDetails>
        },
      ],

  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
