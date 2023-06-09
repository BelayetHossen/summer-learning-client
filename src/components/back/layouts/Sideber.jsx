import { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider'

import { FaWindowClose, FaGripLines, FaUserFriends } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import axios from "axios";



const Sidebar = () => {
    const navigate = useNavigate()
    const [isActive, setActive] = useState('false')
    const { user, logOut } = useContext(AuthContext)
    const [auth, setAuth] = useState(null);

    const getUserData = async (email) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/getAuth/${email}`);
            const userData = response.data;
            setAuth(userData);
        } catch (error) {
            console.error(error);
        }
    };
    getUserData(user?.email);




    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    const handleLogOut = () => {
        logOut()
        navigate('/')
    }
    return (
        <>

            {/* mobile Screen Navbar */}
            <div className='z-5 bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='w-full flex py-2 bg-gray-100'>
                        <img
                            className='object-cover w-12 h-12 mx-2 rounded-full'
                            src={user?.photoURL}
                            alt='avatar'
                            referrerPolicy='no-referrer'
                        />
                        <div>
                            <h4>{user?.displayName}</h4>
                            <p>{user?.role}</p>
                        </div>

                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    {
                        isActive ? <FaGripLines /> : <FaWindowClose />
                    }
                </button>
            </div>


            {/* Sidebar */}
            <div
                className={`z-[99] md:fixed flex flex-col justify-between overflow-x-hidden bg-purple-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    {/* Profile Info */}
                    <div>
                        <div className='w-full md:flex py-2 bg-purple-100'>
                            <img
                                className='object-cover w-12 h-12 mx-2 rounded-full'
                                src={user?.photoURL}
                                alt='avatar'
                                referrerPolicy='no-referrer'
                            />
                            <div>
                                <h4>{user?.displayName}</h4>
                                <p>{auth?.role}</p>
                            </div>
                            <hr />

                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-3 text-white'>
                        <nav>
                            <NavLink
                                to='/dashboard'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform  hover:bg-gray-100   hover:text-gray-900 ${isActive ? 'bg-purple-300' : 'text-gray-600'
                                    }`
                                }
                            >
                                <RxDashboard />
                                <span className='mx-4 font-medium'>Dashboard</span>
                            </NavLink>
                            <NavLink
                                to='/dashboard/users'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform  hover:bg-gray-100   hover:text-gray-900 ${isActive ? 'bg-purple-300' : 'text-gray-600'
                                    }`
                                }
                            >
                                <FaUserFriends />
                                <span className='mx-4 font-medium'>Manage users</span>
                            </NavLink>

                            {/* Admin menus */}
                            {auth?.role == "Admin" && <>
                                <NavLink
                                    to='/dashboard/users'
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform  hover:bg-gray-100   hover:text-gray-900 ${isActive ? 'bg-purple-300' : 'text-gray-600'
                                        }`
                                    }
                                >
                                    <FaUserFriends />
                                    <span className='mx-4 font-medium'>Manage users</span>
                                </NavLink>
                                <NavLink
                                    to='/dashboard/classes'
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform  hover:bg-gray-100   hover:text-gray-900 ${isActive ? 'bg-purple-300' : 'text-gray-600'
                                        }`
                                    }
                                >
                                    <FaUserFriends />
                                    <span className='mx-4 font-medium'>Manage classes</span>
                                </NavLink>
                            </>}


                            {/* Instractor menu */}
                            {auth?.role == "Instractor" && <>
                                <NavLink
                                    to='/dashboard/instractor/classes'
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform  hover:bg-gray-100   hover:text-gray-900 ${isActive ? 'bg-purple-300' : 'text-gray-600'
                                        }`
                                    }
                                >
                                    <FaUserFriends />
                                    <span className='mx-4 font-medium'>My classes</span>
                                </NavLink>
                                <NavLink
                                    to='/dashboard/instractor/addClass'
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform  hover:bg-gray-100   hover:text-gray-900 ${isActive ? 'bg-purple-300' : 'text-gray-600'
                                        }`
                                    }
                                >
                                    <FaUserFriends />
                                    <span className='mx-4 font-medium'>Add new class</span>
                                </NavLink>
                            </>}

                        </nav>
                    </div>
                </div>

                <div>
                    <hr />

                    <button
                        onClick={handleLogOut}
                        className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                    >
                        <AiOutlineLogout />
                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar
