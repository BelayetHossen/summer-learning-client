import { Outlet } from "react-router-dom";
import Sidebar from "./Sideber";
import { ToastContainer } from "react-toastify";


const AdminMain = () => {


    return (
        <>
            <div className='relative min-h-screen md:flex'>
                <ToastContainer />
                <Sidebar />
                <div className='flex-1  md:ml-64'>
                    <div className='p-5'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminMain;


