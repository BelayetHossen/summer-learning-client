
import {
    Card,
    CardHeader,
    Typography,
    CardBody,
} from "@material-tailwind/react";
// import { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import Loader from "../../../Loader";
// import { toast } from "react-toastify";
// import { useQuery } from '@tanstack/react-query'
// import axios from "axios";
// import { AuthContext } from "../../../../providers/AuthProvider";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import { deleteClass } from "../../../../api/Class";
// import Swal from 'sweetalert2'
import { Helmet } from "react-helmet";


const TABLE_HEAD = ["SL", "Class name", "Price", "Available seats", "Total enrolled", "Status", "Action"];

const PaymentHistrory = () => {
    // const [spinning, setSpinning] = useState(false);
    // const { user } = useContext(AuthContext)

    // const { data: classes = [], isLoading, refetch } = useQuery(['classes'], {
    //     queryFn: async () => {
    //         const res = await axios.get(`${import.meta.env.VITE_API_URL}/getEnrolledClass/${user?.email}`)
    //         return res.data;
    //     },
    // })
    // if (isLoading) {
    //     return <Loader />;
    // }



    return (
        <>
            {/* {isLoading && <Loader />}
            {spinning && <Loader />} */}
            <Helmet><title>Payment history | Summer learning language</title></Helmet>
            <Card className="h-full w-full">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-8 flex items-center justify-between gap-6">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                All the payment history
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                See information about all payment
                            </Typography>
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

                            {/* {classes.map((myClass, index) => {

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
                            })} */}
                        </tbody>
                    </table>
                </CardBody>

            </Card>
        </>
    );
}

export default PaymentHistrory;