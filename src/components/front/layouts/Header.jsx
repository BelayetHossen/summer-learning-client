import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to={'/'}>Home</Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Account
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Blocks
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Docs
                </a>
            </Typography>
        </ul>
    );

    return (
        <>
            <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        Material Tailwind
                    </Typography>
                    <div className="">
                        <div className="flex items-center gap-4">
                            <div className="mr-4 hidden lg:block">{navList}</div>
                            <Link to={'/login'}><Button
                                variant="gradient"
                                size="sm"
                                className="hidden lg:inline-block"
                            >
                                <span>Login</span>
                            </Button></Link>

                            <Tooltip content="Material Tailwind" placement="bottom">
                                <div className="flex items-center gap-4">
                                    <Avatar src="https://i.ibb.co/3fz2rYg/m2.jpg" alt="avatar" variant="rounded" />
                                    <div>
                                        <Typography variant="h6">Candice Wu</Typography>
                                        <Typography variant="small" color="gray" className="font-normal">Web Developer</Typography>
                                    </div>


                                </div>
                            </Tooltip>

                            <IconButton
                                variant="text"
                                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                ripple={false}
                                onClick={() => setOpenNav(!openNav)}
                            >
                                {openNav ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </IconButton>
                        </div>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <Button variant="gradient" size="sm" fullWidth className="mb-2">
                        <span>Buy Now</span>
                    </Button>
                </MobileNav>
            </Navbar>





        </>

    );
};

export default Header;