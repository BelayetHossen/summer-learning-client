import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../components/back/pages/dashboard/Dashboard'
import Main from '../components/front/layouts/Main'
import Home from '../components/front/pages/Home'
import Login from '../components/front/pages/Login'
import Register from '../components/front/pages/Register'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
        path: '/admin',
        element: <Main></Main>,
        children: [
            {
                path: '/admin/dashboard',
                element: <Dashboard></Dashboard>,
            },
        ]
    },
])