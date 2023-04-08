import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import OrderReview from './components/OrderReview/OrderReview'
import Main from './components/layout/Main'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Grandpa from './components/Grandpa/Grandpa'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
        loader : () => fetch('tsharts.json'),
      },
      {
        path : '/order',
        element : <OrderReview></OrderReview>
      },
      {
        path : '/grandpa',
        element : <Grandpa></Grandpa>
      },
      {
        path : '/about',
        element : <About></About>
      },
      {
        path : '/contact',
        element : <Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
