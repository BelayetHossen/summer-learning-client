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
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../Loader";
import { toast } from "react-toastify";
import { useQuery } from '@tanstack/react-query'
import axios from "axios";
import { AuthContext } from "../../../../providers/AuthProvider";
import { FaEdit, FaTrash } from "react-icons/fa";
import { deleteClass } from "../../../../api/Class";
import Swal from 'sweetalert2'


const TABLE_HEAD = ["SL", "Class name", "Price", "Available seats", "Total enrolled", "Status", "Action"];

const SelectedClass = () => {
    const [spinning, setSpinning] = useState(false);
    const { user } = useContext(AuthContext)

    const { data: classes = [], isLoading, refetch } = useQuery(['classes'], {
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/getMyClass/${user?.email}`)
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
                                                    $ {myClass.price}
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
                                            <div className="flex flex-col">
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {myClass.enrolled}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <div className="w-max">
                                                <Chip
                                                    variant="ghost"
                                                    size="sm"
                                                    value={myClass.status}
                                                    color={myClass.status !== "Pending" ? "green" : "blue-gray"}
                                                />
                                            </div>
                                        </td>
                                        <td className="p-4 w-50 border-b border-blue-gray-50 flex justify-around items-center gap-1">
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



export default SelectedClass;