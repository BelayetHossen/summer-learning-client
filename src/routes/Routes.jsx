import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/front/pages/Home'
import Login from '../components/front/pages/Login'
import Register from '../components/front/pages/Register'
import FrontMain from '../components/front/layouts/FrontMain'
import AdminMain from '../components/back/layouts/AdminMain'
import Users from '../components/back/pages/admins/Users'
import Classes from '../components/back/pages/admins/Classes'
import PrivateRoute from './PrivateRoute'
import Dashboard from '../components/back/pages/dashboard/Dashboard'
import EditClass from '../components/back/pages/EditClass'
import SelectedClass from '../components/back/pages/student/SelectedClass'
import EnrolledClass from '../components/back/pages/student/EnrolledClass'
import AllClasses from '../components/front/pages/AllClasses'
import Instructors from '../components/front/pages/Instructors'
import MyClasses from '../components/back/pages/instructor/MyClasses'
import Addclass from '../components/back/pages/instructor/AddClass'
import InstructorClassess from '../components/front/pages/InstructorClassess'
import { instuctorClasssFront, singleClass } from '../api/Class'
import SinClassPage from '../components/front/pages/SinClassPage'


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
            {
                path: '/classes',
                element: <AllClasses></AllClasses>,
            },
            {
                path: '/instructors',
                element: <Instructors />,
            },
            {
                path: '/instructor/classes/:email',
                element: <InstructorClassess />,
                loader: ({ params }) => instuctorClasssFront(params.email),
            },
            {
                path: '/class/:id',
                element: <SinClassPage />,
                loader: ({ params }) => singleClass(params.id),
            }
        ]
    },








    {
        path: '/dashboard',
        element: <PrivateRoute><AdminMain></AdminMain></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
            },
            {
                path: '/dashboard/users',
                element: <PrivateRoute><Users></Users></PrivateRoute>,
            },
            {
                path: '/dashboard/classes',
                element: <PrivateRoute><Classes /></PrivateRoute>,
            },
            {
                path: '/dashboard/instructor/classes',
                element: <PrivateRoute><MyClasses /></PrivateRoute>,
            },
            {
                path: '/dashboard/instructor/addClass',
                element: <PrivateRoute><Addclass /></PrivateRoute>,
            },
            {
                path: '/dashboard/instructor/editClass/:id',
                element: <PrivateRoute><EditClass /></PrivateRoute>,
                loader: ({ params }) => singleClass(params.id),
            },
            {
                path: '/dashboard/student/selectedClass',
                element: <PrivateRoute><SelectedClass /></PrivateRoute>,
            },
            {
                path: '/dashboard/student/enrolledClass',
                element: <PrivateRoute><EnrolledClass /></PrivateRoute>,
            },
        ]
    },
])