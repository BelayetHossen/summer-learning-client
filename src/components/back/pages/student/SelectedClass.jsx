
import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
} from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../Loader";
import { toast } from "react-toastify";
import { useQuery } from '@tanstack/react-query'
import axios from "axios";
import { AuthContext } from "../../../../providers/AuthProvider";
import { FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2'
import { deleteSelectedClass } from "../../../../api/Class";


const TABLE_HEAD = ["SL", "Class name", "Price", "Payment", "Action"];

const SelectedClass = () => {
    const [spinning, setSpinning] = useState(false);
    const { user } = useContext(AuthContext)
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const fetchData = async (email) => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/getAuth/${email}`);
                const userData = response.data;
                setAuth(userData);
            } catch (error) {
                // Handle error here
                console.error(error);
            }
        };

        fetchData(user?.email);
    }, [user]);

    const { data: classes = [], isLoading, refetch } = useQuery(['classes'], {
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/getSelectedClass/${user?.email}`)
            return res.data;
        },
    })
    if (isLoading) {
        return <Loader />;
    }

    const deleteClassHandller = (userEmail, classId) => {
        setSpinning(true)
        Swal.fire({
            title: 'Are you sure?',
            text: "One class delete from selected",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'red',
            cancelButtonColor: 'purple',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteSelectedClass(userEmail, classId).then(() => {
                    toast.success("Data deleted successfully");
                    refetch()
                    setSpinning(false)
                })
                    .catch(err => console.log(err))
            } else {
                toast.success("Your data is safe");
                setSpinning(false)
            }
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
                                My selected classes
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                See information about my selected classes
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
                                            <Button

                                                variant="gradient"
                                                size="sm"
                                                className="from-purple-700 py-3"
                                                type="submit"
                                            >
                                                Pay now
                                            </Button>
                                        </td>
                                        <td className="p-4 w-50 border-b border-blue-gray-50 flex justify-around items-center gap-1">


                                            <Button
                                                onClick={() => { deleteClassHandller(auth?.email, myClass._id) }}
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

            </Card >
        </>
    );
}



export default SelectedClass;