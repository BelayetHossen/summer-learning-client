import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../../../api/User";
import Loader from "../../../Loader";


const TABLE_HEAD = ["SL", "Name", "Role", "Status", "Action"];

const Users = () => {
    const [spinning, setSpinning] = useState(false);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setSpinning(true)
        getAllUsers().then(data => {
            setUsers(data)
            setSpinning(false)
        })
            .catch(() => setSpinning(false))
    }, [])

    return (
        <>
            {spinning && <Loader />}
            <Card className="h-full w-full">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-8 flex items-center justify-between gap-6">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Users list
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                See information about all users
                            </Typography>
                        </div>
                        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                            <Link to={'/'}>
                                <Button
                                    variant="gradient"
                                    size="sm"
                                    className="from-purple-600 flex items-center gap-3"
                                >
                                    <UserPlusIcon strokeWidth={2} className="h-4 w-4" /><span>Add member</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <Tabs value="all" className="w-full md:w-max">
                            <TabsHeader className="rounded">
                                <Button
                                    variant="gradient"
                                    size="sm"
                                    className="from-purple-600 flex items-center"
                                >
                                    <Tab value="All" className="">
                                        &nbsp;All&nbsp;
                                    </Tab>
                                    <Tab value="Students" className="">
                                        &nbsp;Students&nbsp;
                                    </Tab>
                                    <Tab value="Instractors" className="">
                                        &nbsp;Instractors&nbsp;
                                    </Tab>
                                </Button>
                            </TabsHeader>
                        </Tabs>
                        <div className="w-full md:w-72">
                            <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
                        </div>
                    </div>
                </CardHeader>

                <CardBody className="overflow-scroll px-0">
                    <table className="mt-4 w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => {

                                return (
                                    <tr key={user._id}>
                                        <td className="p-4 border-b border-blue-gray-50">{index + 1}</td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <div className="flex items-center gap-3">
                                                <Avatar src={user.photoURL} alt={name} size="sm" />
                                                <div className="flex flex-col">
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {user.displayName}
                                                    </Typography>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal opacity-70"
                                                    >
                                                        {user.email}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <div className="flex flex-col">
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {user.role}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <div className="w-max">
                                                <Chip
                                                    variant="ghost"
                                                    size="sm"
                                                    value={user ? "online" : "offline"}
                                                    color={user ? "green" : "blue-gray"}
                                                />
                                            </div>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <Menu>
                                                <MenuHandler>
                                                    <Button
                                                        variant="gradient"
                                                        size="sm"
                                                        className="from-purple-600 flex items-center gap-3"
                                                    >
                                                        <span>Change role</span>
                                                    </Button>
                                                </MenuHandler>

                                                <MenuList>
                                                    {user.role === "Student" ? <MenuItem disabled>Make student</MenuItem> : <MenuItem>Make admin</MenuItem>}
                                                    {user.role === "Instractor" ? <MenuItem disabled>Make instractor</MenuItem> : <MenuItem>Make admin</MenuItem>}
                                                    {user.role === "Admin" ? <MenuItem disabled>Make admin</MenuItem> : <MenuItem>Make admin</MenuItem>}
                                                </MenuList>
                                            </Menu>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </CardBody>

            </Card>
        </>
    );
}


export default Users;