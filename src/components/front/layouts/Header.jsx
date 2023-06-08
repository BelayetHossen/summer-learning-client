import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Avatar,
    MenuItem,
    MenuList,
    Menu,
    MenuHandler,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    LifebuoyIcon,
    PowerIcon,
} from "@heroicons/react/24/outline";
import { createElement, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
    const { auth, user, logOut } = useContext(AuthContext);
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
    const handleLogout = () => {
        logOut()
            .then((result) => {
                console.log(result);
            })
            .catch((error) => console.error(error));
    };


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const location = useLocation();
    // const pathName = location.pathname;


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
                            {user ? (

                                <><Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
                                    <MenuHandler>
                                        <Button
                                            variant="text"
                                            color="blue-gray"
                                            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                                        >
                                            <Avatar
                                                variant="circular"
                                                size="sm"
                                                alt="candice wu"
                                                className="border border-blue-500 p-0.5"
                                                src={auth?.currentUser?.photoURL}
                                            />
                                            <ChevronDownIcon
                                                strokeWidth={2.5}
                                                className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </Button>
                                    </MenuHandler>
                                    <MenuList className="p-1">
                                        <span className="ml-4 py-5 mt-2"></span>
                                        <MenuItem
                                            className="flex items-center gap-2 rounded hover:bg-purple-500/10 focus:bg-purple-500/10 active:bg-purple-500/10"
                                        >

                                            <Typography
                                                as="span"
                                                variant="small"
                                                className="font-normal"
                                                color="purple"
                                            >
                                                {user?.displayName}
                                            </Typography>
                                        </MenuItem>
                                        <Link to={'/dashboard'}>
                                            <MenuItem
                                                className="flex items-center gap-2 rounded hover:bg-purple-500/10 focus:bg-purple-500/10 active:bg-purple-500/10"
                                            >
                                                {createElement(LifebuoyIcon, {
                                                    className: "h-4 w-4 isLastItem text-red-500",
                                                    strokeWidth: 2,
                                                })}
                                                <Typography
                                                    as="span"
                                                    variant="small"
                                                    className="font-normal"
                                                    color="purple"
                                                >
                                                    Dashboard
                                                </Typography>
                                            </MenuItem>
                                        </Link>

                                        <MenuItem
                                            onClick={handleLogout}
                                            className="flex items-center gap-2 rounded hover:bg-purple-500/10 focus:bg-purple-500/10 active:bg-purple-500/10"
                                        >
                                            {createElement(PowerIcon, {
                                                className: "h-4 w-4 isLastItem text-red-500",
                                                strokeWidth: 2,
                                            })}
                                            <Typography
                                                as="span"
                                                variant="small"
                                                className="font-normal"
                                                color="purple"
                                            >
                                                Sign Out
                                            </Typography>
                                        </MenuItem>
                                    </MenuList>
                                </Menu></>
                            ) : (
                                <Link to={'/login'}>
                                    <Button
                                        variant="gradient"
                                        size="sm"
                                        className="from-purple-600"
                                    >
                                        <span>Login</span>
                                    </Button>
                                </Link>
                            )}



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