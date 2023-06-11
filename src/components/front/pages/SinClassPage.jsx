import { useLoaderData } from "react-router-dom";
import PageTitle from "../layouts/PageTitle";
import { Button } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from "axios";
import { selectClass } from "../../../api/Class";
import { toast } from "react-toastify";
import Loader from "../../Loader";


const SinClassPage = () => {
    const myClass = useLoaderData();
    const [loading, setLoading] = useState(false)
    const { user } = useContext(AuthContext);
    const [auth, setAuth] = useState(null);
    console.log(auth);
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
    const selectClassHandller = (userEmail, classId) => {
        setLoading(true)
        if (auth?.email == "Admin") {
            toast.warning("Admin can't select any course!");
            setLoading(false)
            return;
        }
        if (auth?.email == "Instructor") {
            toast.warning("Instructor can't select any course!");
            setLoading(false)
            return;
        }
        selectClass(userEmail, classId).then(data => {
            if (data.insertedId) {
                toast.success("Class added successfully");
                setLoading(false)
            }
            toast.warning(data.message);
            setLoading(false)
        })
            .catch((error) => { toast.success(error); setLoading(false) })
    }
    return (
        <div className="bg-purple-100 pb-8">
            {loading && <Loader />}
            <PageTitle title={myClass.name} text="" img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"></PageTitle>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <section className="my-24">
                        <div className="flex flex-wrap">
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
                                <div className="flex lg:py-12">
                                    <img src={myClass.photoName}
                                        className="z-[10] w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px] lg:mt-16" alt="image" />
                                </div>
                            </div>

                            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                                <div className="h-full rounded-lg bg-purple-600 p-6 text-center text-white lg:pl-12 lg:text-left">
                                    <div className="lg:pl-12">
                                        <h2 className="mb-8 text-3xl font-bold">{myClass.name}</h2>
                                        <h2 className="mb-8 text-xl font-bold">{myClass.instructor_name}</h2>
                                        <p className="mb-1 text-neutral-500 dark:text-neutral-300">Total seats: {myClass.seats}</p>
                                        <p className="mb-1 text-neutral-500 dark:text-neutral-300">Total enrolled: {myClass.enrolled}</p>
                                        <p className="mb-1 dark:text-neutral-300 text-green-600">Available seats: {myClass.seats - myClass.enrolled}</p>

                                        <p>{myClass.details}</p>
                                    </div>
                                    <div className="flex justify-between items-center gap-2 w-full mt-4">
                                        <span>
                                            <Button onClick={() => selectClassHandller(auth?.email, myClass?._id)} className="btn bg-blue-700 w-full">
                                                Select class
                                            </Button>
                                        </span>
                                        <span><Button className="btn bg-blue-700 w-full">Enroll now</Button></span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </section>
                </div>
            </div>
        </div>
    );
};

export default SinClassPage;