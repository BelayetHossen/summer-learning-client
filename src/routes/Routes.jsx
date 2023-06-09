import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/front/pages/Home'
import Login from '../components/front/pages/Login'
import Register from '../components/front/pages/Register'
import FrontMain from '../components/front/layouts/FrontMain'
import AdminMain from '../components/back/layouts/AdminMain'
import Users from '../components/back/pages/admins/Users'
import Classes from '../components/back/pages/admins/Classes'
import PrivateRoute from './PrivateRoute'
import MyClasses from '../components/back/pages/instractor/MyClasses'
import Dashboard from '../components/back/pages/dashboard/Dashboard'
import AddClass from '../components/back/pages/instractor/AddClass'


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
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
            },
            {
                path: '/dashboard/users',
                element: <Users></Users>,
            },
            {
                path: '/dashboard/classes',
                element: <Classes />,
            },
            {
                path: '/dashboard/instractor/classes',
                element: <MyClasses />,
            },
            {
                path: '/dashboard/instractor/addClass',
                element: <AddClass />,
            },
        ]
    },
])