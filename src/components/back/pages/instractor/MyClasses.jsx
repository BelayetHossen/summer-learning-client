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
import { useState } from "react";
import { Link } from "react-router-dom";
import { updateRoleAdmin, updateRoleInstractor, updateRoleStudent } from "../../../../api/User";
import Loader from "../../../Loader";
import { toast } from "react-toastify";
import { useQuery } from '@tanstack/react-query'
import axios from "axios";


const TABLE_HEAD = ["SL", "Name", "Role", "Status", "Action"];

const MyClasses = () => {
    const [spinning, setSpinning] = useState(false);
    const { refetch, data: users = [], isLoading } = useQuery({
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/allUsers`)
            return res.data
        },
    })

    const makeAdminHandller = (id) => {
        setSpinning(true)
        updateRoleAdmin(id, { role: "Admin" }).then(data => {
            if (data.modifiedCount > 0) {
                refetch()
                toast.success("User role updated successfully!");
            }
            setSpinning(false)
        })
            .catch(() => { setSpinning(false) })
    }
    const makeInstractorHandller = (id) => {
        setSpinning(true)
        updateRoleInstractor(id, { role: "Instractor" }).then(data => {
            if (data.modifiedCount > 0) {
                refetch()
                toast.success("User role updated successfully!");
            }
            setSpinning(false)
        })
            .catch(() => { setSpinning(false) })
    }
    const makeStudentHandller = (id) => {
        setSpinning(true)
        updateRoleStudent(id, { role: "Student" }).then(data => {
            if (data.modifiedCount > 0) {
                refetch()
                toast.success("User role updated successfully!");
            }
            setSpinning(false)
        })
            .catch(() => { setSpinning(false) })
    }

    return (
        <>
            {isLoading && <Loader />}
            {spinning && <Loader />}
            <Card className="h-full w-full">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-8 flex items-center justify-between gap-6">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                My all classes
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                See information about all classes
                            </Typography>
                        </div>
                        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                            <Link to={'/dashboard/instractor/addClass'}>
                                <Button
                                    variant="gradient"
                                    size="sm"
                                    className="from-purple-600 flex items-center gap-3"
                                >
                                    <UserPlusIcon strokeWidth={2} className="h-4 w-4" /><span>Add new class</span>
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
                                                    {user.role === "Student" ? <MenuItem disabled>Make student</MenuItem> : <MenuItem onClick={() => { makeStudentHandller(user._id) }}>Make student</MenuItem>}
                                                    {user.role === "Instractor" ? <MenuItem disabled>Make instractor</MenuItem> : <MenuItem onClick={() => { makeInstractorHandller(user._id) }}>Make instractor</MenuItem>}
                                                    {user.role === "Admin" ? <MenuItem disabled>Make admin</MenuItem> : <MenuItem onClick={() => { makeAdminHandller(user._id) }}>Make admin</MenuItem>}
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



export default MyClasses;