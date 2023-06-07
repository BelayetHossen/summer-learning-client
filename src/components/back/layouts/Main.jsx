
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sideber';
import Footer from './Sideber';



const Main = () => {


    return (
        <>
            <Header></Header>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};



export default Main;