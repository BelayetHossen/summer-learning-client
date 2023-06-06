import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../components/back/pages/Dashboard'
import App from '../App'
import Main from '../components/back/layouts/Main'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <App></App>,
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