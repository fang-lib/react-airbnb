import React from "react"
import { Navigate } from "react-router-dom"

const Home = React.lazy(() => import('@/views/home/Home'))
const routes = [
  {
    path: '/',
    element: <Navigate to='/home'></Navigate>
  },
  {
    path: '/home',
    element: <Home/>
  }
]

export default routes