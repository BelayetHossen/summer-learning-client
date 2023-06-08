
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer } from "react-toastify";



const FrontMain = () => {


    return (
        <>
            <Header></Header>
            <ToastContainer />
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};



export default FrontMain;