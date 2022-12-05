import Entire from "@/views/entire/entire"
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
  },
  {
    path: '/entire',
    element: <Entire/>
  }
]

export default routes