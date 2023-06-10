
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Loader";
import SingleInstructor from "../layouts/SingleInstructor";

const Instructors = () => {


    const { data: instuctors = [], isLoading } = useQuery(['instuctors'], {
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/allInstuctors`)
            return res.data
        },
    })


    if (isLoading)
        return (
            <Loader />
        );



    return (
        <div className="bg-purple-100">
            <div className="container mx-auto pb-20 x-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <h2 className="text-center text-3xl py-10">All Instructors</h2>
                <div className="">
                    <div className="md:grid grid-cols-3 gap-10">
                        {
                            instuctors.map((instuctor) => (
                                <SingleInstructor key={instuctor._id} instuctor={instuctor} />
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};


export default Instructors;