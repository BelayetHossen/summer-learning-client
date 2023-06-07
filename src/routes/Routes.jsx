import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../components/back/pages/dashboard/Dashboard'
import Home from '../components/front/pages/Home'
import Login from '../components/front/pages/Login'
import Register from '../components/front/pages/Register'
import FrontMain from '../components/front/layouts/FrontMain'
import AdminMain from '../components/back/layouts/AdminMain'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <FrontMain></FrontMain>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
        ]
    },








    {
        path: '/dashboard',
        element: <AdminMain></AdminMain>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
            },
        ]
    },
])