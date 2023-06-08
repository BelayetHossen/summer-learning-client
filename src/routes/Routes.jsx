import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../components/back/pages/dashboard/Dashboard'
import Home from '../components/front/pages/Home'
import Login from '../components/front/pages/Login'
import Register from '../components/front/pages/Register'
import FrontMain from '../components/front/layouts/FrontMain'
import AdminMain from '../components/back/layouts/AdminMain'
import Users from '../components/back/pages/admins/Users'
import Classes from '../components/back/pages/admins/Classes'


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
            {
                path: '/dashboard/users',
                element: <Users></Users>,
            },
            {
                path: '/dashboard/classes',
                element: <Classes />,
            },
        ]
    },
])