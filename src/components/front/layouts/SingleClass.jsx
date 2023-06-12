import { Button } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { selectClass } from "../../../api/Class";
import Loader from "../../Loader";

const SingleClass = ({ singleClass }) => {
    const [loading, setLoading] = useState(false)
    const { user } = useContext(AuthContext);
    const [auth, setAuth] = useState(null);
    const navigate = useNavigate();
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
    const nullUser = () => {
        setLoading(true)
        toast.warning("You have to login first..");
        navigate("/login", { replace: true });
        setLoading(false)
    }

    return (
        <div>
            {loading && <Loader />}
            <div className={`md:flex justify-between gap-20 gap-3 shadow-md hover:shadow-2xl hover:scale-102 duration-300 px-8 py-7 rounded overflow-hidden ${singleClass.seats == 0 ? "bg-red-200" : "bg-gray-100"}`}>
                <div className="w-full">
                    <img
                        className="w-full object-contain hover:scale-105 duration-500"
                        src={singleClass?.photoName}
                        alt={singleClass?.name}
                    />
                </div>
                <div className="w-full flex flex-col gap-3 my-3">
                    <Link
                        className="hover:text-rose-500 duration-300 flex justify-between items-center"
                    >
                        <h2 className="text-stone-950 font-semibold text-xl capitalize">
                            {singleClass?.name.slice(0, 20)}
                        </h2>
                    </Link>
                    <p className="text-sm text-gray-600">
                        Instructor name: <span className="font-semibold capitalize text-gray-600">{singleClass?.instructor_name}</span>
                    </p>
                    <p className={`text-sm ${singleClass.seats == 0 ? "text-blue-600" : "text-gray-600"}`}>
                        Available seats: <span className="font-semibold capitalize text-gray-600">{singleClass?.seats}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                        Price: <span className="text-rose-500 font-semibold text-gray-600">{singleClass?.price}</span>
                    </p>
                </div>

                <div className="flex md:flex-col justify-between items-center gap-2 w-full">
                    <Link to={`/class/${singleClass._id}`}>
                        <Button

                            variant="gradient"
                            size="sm"
                            className="from-purple-600 w-full py-3"
                        >
                            Details

                        </Button>
                    </Link>
                    {
                        auth?.role == "Admin" && <span>
                            <Button disabled className="btn bg-purple-700 w-full">
                                Select class
                            </Button>
                        </span>
                    }
                    {
                        auth?.role == "Instructor" && <span>
                            <Button disabled className="btn bg-purple-700 w-full">
                                Select class
                            </Button>
                        </span>
                    }
                    {
                        auth?.role == "Student" && <span>
                            <Button onClick={() => selectClassHandller(auth?.email, singleClass?._id)} className="btn bg-purple-700 w-full">
                                Select class
                            </Button>
                        </span>
                    }
                    {
                        user == null && <span>
                            <Button onClick={() => nullUser()} className="btn bg-purple-700 w-full">
                                Select class
                            </Button>
                        </span>
                    }

                </div>


            </div >
        </div >
    );
};

export default SingleClass;