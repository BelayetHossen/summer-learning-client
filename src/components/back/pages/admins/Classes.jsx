
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Tabs,
    TabsHeader,
    Tab,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Loader from "../../../Loader";
import { toast } from "react-toastify";
import { useQuery } from '@tanstack/react-query'
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { deleteClass, updateClassApproved, updateClassDenied, updateClassPending } from "../../../../api/Class";
import Swal from 'sweetalert2'
import { useState } from "react";


const TABLE_HEAD = ["SL", "Class name", "Instructor", "Available seats", "Status", "Action"];

const Classes = () => {
    const [spinning, setSpinning] = useState(false);

    const { data: classes = [], isLoading, refetch } = useQuery(['classes'], {
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/allClassesAdmin`)
            return res.data;
        },
    })
    if (isLoading) {
        return <Loader />;
    }

    const deleteClassHandller = (id) => {
        setSpinning(true)
        Swal.fire({
            title: 'Are you sure?',
            text: "One class data delete",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'red',
            cancelButtonColor: 'purple',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteClass(id).then(() => {
                    toast.success("Data deleted successfully");
                    refetch()
                    setSpinning(false)
                })
                    .catch(err => console.log(err))
            }
            toast.success("Your data is safe");
            setSpinning(false)
        })
    }
    const makeApprovedHandller = (id) => {
        setSpinning(true)
        updateClassApproved(id, { status: "Approved", denied_for: "" }).then(data => {
            if (data.modifiedCount > 0) {
                refetch()
                toast.success("Class Approved successfully!");
            }
            setSpinning(false)
        })
            .catch(() => { setSpinning(false) })
    }
    const makePendingHandller = (id) => {
        setSpinning(true)
        updateClassPending(id, { status: "Pending", denied_for: "" }).then(data => {
            if (data.modifiedCount > 0) {
                refetch()
                toast.success("Class back to Pending successfully!");
            }
            setSpinning(false)
        })
            .catch(() => { setSpinning(false) })
    }
    const makeDeniedHandller = (id) => {
        Swal.fire({
            title: 'Please write a reason',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Denied',
            showLoaderOnConfirm: true,
            preConfirm: (text) => {
                return text
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.value == "") {
                Swal.fire({
                    title: `Please write a vallid reason for denied class.. Try again`,
                })

            } else {
                updateClassDenied(id, { status: "Denied", denied_for: result.value }).then(data => {
                    if (data.modifiedCount > 0) {
                        refetch()
                        toast.success("Class move to Denied successfully");
                    }
                    setSpinning(false)
                })
                    .catch(() => { setSpinning(false) })
            }
        })
        // setSpinning(true)
        // updateClassPending(id, { status: "Denied", denied_for: "" }).then(data => {
        //     if (data.modifiedCount > 0) {
        //         refetch()
        //         toast.success("Class move to Denied");
        //     }
        //     setSpinning(false)
        // })
        //     .catch(() => { setSpinning(false) })
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
                            <Link to={'/dashboard/instructor/addClass'}>
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
                                    <Tab value="Instructors" className="">
                                        &nbsp;Instructors&nbsp;
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
                            {classes.map((myClass, index) => {

                                return (
                                    <tr key={myClass._id}>
                                        <td className="p-4 border-b border-blue-gray-50">{index + 1}</td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <div className="flex items-center gap-3">
                                                <img className="w-[80px] rounded" src={myClass.photoName} alt={myClass.photoName} />

                                                <div className="flex flex-col">
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {myClass.name}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <div className="flex flex-col">
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {myClass.instructor_name}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <div className="flex flex-col">
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {myClass.seats}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <div className="w-max">
                                                {myClass.status == "Denied" && <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Denied</span>}
                                                {myClass.status == "Pending" && <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Pending</span>}
                                                {myClass.status == "Approved" && <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Approved</span>}

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
                                                        <span>Action</span>
                                                    </Button>
                                                </MenuHandler>

                                                <MenuList>
                                                    {myClass.status === "Approved" ? <MenuItem disabled>Approved</MenuItem> : <MenuItem onClick={() => { makeApprovedHandller(myClass._id) }}>Aprpoved</MenuItem>}

                                                    {myClass.status === "Denied" ? <MenuItem disabled>Denied</MenuItem> : <MenuItem onClick={() => { makeDeniedHandller(myClass._id) }}>Denied</MenuItem>}

                                                    {myClass.status === "Pending" ? <MenuItem disabled>Pending</MenuItem> : <MenuItem onClick={() => { makePendingHandller(myClass._id) }}>Pending</MenuItem>}

                                                    <div className="p-4 w-50 border-b border-blue-gray-50 flex justify-around items-center gap-1">
                                                        <Link to={`/dashboard/instructor/editClass/${myClass._id}`} onClick={() => { setSpinning(true) }}>
                                                            <Button

                                                                variant="gradient"
                                                                size="sm"
                                                                className="from-purple-600 w-full py-3"
                                                                type="submit"
                                                            >
                                                                <FaEdit />

                                                            </Button>
                                                        </Link>

                                                        <Button
                                                            onClick={() => { deleteClassHandller(myClass._id) }}
                                                            variant="gradient"
                                                            size="sm"
                                                            className="from-red-900 py-3"
                                                            type="submit"
                                                        >
                                                            <FaTrash />
                                                        </Button>
                                                    </div>
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



export default Classes;