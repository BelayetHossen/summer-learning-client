
import { Button, Card, Spinner, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { toast } from "react-toastify";
import { addClass } from "../../../../api/Class";
import Loader from "../../../Loader";
import { Helmet } from "react-helmet";


const Addclass = () => {
    const { user } = useContext(AuthContext)
    const [spinning, setSpinning] = useState(false);
    const { register, formState: { errors }, handleSubmit, getValues, reset } = useForm();
    const navigate = useNavigate();
    const submitAddClass = (e) => {

        setSpinning(true)
        const { name, price, seats, duration, details } = getValues();
        // Image Upload
        const photo = e.photo[0]
        const formData = new FormData()
        formData.append('image', photo)

        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_SECRET_KEY}`
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {
                const photoName = imageData.data.display_url
                const classData = {
                    name,
                    price: parseFloat(price),
                    seats: parseFloat(seats),
                    enrolled: 0,
                    instructor_name: user?.displayName,
                    instructor_email: user?.email,
                    duration: parseFloat(duration),
                    photoName,
                    details,
                    status: "Pending"
                }

                addClass(classData)
                    .then(data => {
                        if (data.insertedId) {
                            toast.success("New class added successfully");
                            reset()
                            navigate("/dashboard/instructor/classes", { replace: true });
                        }

                        toast.warning(data.message);
                        setSpinning(false)
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => {
                toast.error(err.message)
                setSpinning(false)
            })

    };

    return (
        <div>
            <Helmet><title>Add class | Summer learning language</title></Helmet>
            {spinning && <Loader />}
            <Card className="h-full w-full p-8">

                <div className="mb-8 flex items-center justify-between gap-6">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Add new class
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Link to={'/dashboard/instructor/classes'}>
                            <Button
                                variant="gradient"
                                size="sm"
                                className="from-purple-600 flex items-center gap-3"
                            >
                                <span>Back</span>
                            </Button>
                        </Link>
                    </div>
                </div>

                <form onSubmit={handleSubmit(submitAddClass)}>

                    <div className='space-y-6'>
                        <div className="mb-2">
                            <label className="block text-sm font-semibold text-gray-800">
                                Class name
                            </label>
                            <input defaultValue="" {...register("name", { required: true })} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                            {errors.name?.type === 'required' && <p className="text-red-400">Class name field is required</p>}
                        </div>



                        <div className='flex justify-between gap-2'>
                            <div className="mb-2 w-full">
                                <label className="block text-sm font-semibold text-gray-800">
                                    Price
                                </label>
                                <input defaultValue="" {...register("price", { required: true })} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" type="number" />
                                {errors.price?.type === 'required' && <p className="text-red-400">Price field is required</p>}
                            </div>


                            <div className="mb-2 w-full">
                                <label className="block text-sm font-semibold text-gray-800">
                                    Available seats
                                </label>
                                <input {...register("seats", { required: true })} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" type="number" />
                                {errors.seat?.type === 'required' && <p className="text-red-400">Available seat field is required</p>}
                            </div>

                        </div>

                        <div className='flex justify-between gap-2'>
                            <div className="mb-2 w-full">
                                <label className="block text-sm font-semibold text-gray-800">
                                    Instructor name
                                </label>
                                <input defaultValue={user?.displayName} {...register("insName")} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" disabled />
                            </div>

                            <div className="mb-2 w-full">
                                <label className="block text-sm font-semibold text-gray-800">
                                    Instructor email
                                </label>
                                <input defaultValue={user?.email} {...register("insEmail")} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" disabled />
                            </div>

                        </div>
                        <div className='flex justify-between gap-2'>
                            <div className="mb-2 w-full">
                                <label className="block text-sm font-semibold text-gray-800">
                                    Class photo
                                </label>
                                <input defaultValue="" {...register("photo", { required: true })} aria-invalid={errors.name ? "true" : "false"} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" type="file" />
                                {errors.photo?.type === 'required' && <p className="text-red-400">Photo field is required</p>}
                            </div>


                            <div className="mb-2 w-full">
                                <label className="block text-sm font-semibold text-gray-800">
                                    Class duration <small>(in days)</small>
                                </label>
                                <input {...register("duration", { required: true })} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" type="number" />
                                {errors.duration?.type === 'required' && <p className="text-red-400">Class duration is required</p>}
                            </div>

                        </div>
                        <div className="mb-2 w-full">
                            <label className="block text-sm font-semibold text-gray-800">
                                Class details
                            </label>
                            <textarea {...register("details", { required: true })} cols="30" rows="10" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"></textarea>
                            {errors.details?.type === 'required' && <p className="text-red-400">Class details is required</p>}
                        </div>



                    </div>



                    <Button
                        variant="gradient"
                        size="sm"
                        className="from-purple-600 w-full py-3 mt-4"
                        type="submit"
                    >
                        {!spinning ? <span>Add class</span> : <Spinner color="red" className="w-[70px] mx-auto" />}
                    </Button>
                </form>


            </Card>

        </div>
    );
};

export default Addclass;