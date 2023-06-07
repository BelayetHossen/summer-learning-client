import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../components/back/pages/dashboard/Dashboard'
import Main from '../components/front/layouts/Main'
import Home from '../components/front/pages/Home'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
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