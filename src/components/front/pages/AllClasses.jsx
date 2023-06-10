
import SingleClass from "../layouts/SingleClass";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Loader";

const AllClasses = () => {


    const { data: allClasses = [], isLoading } = useQuery(['allClasses'], {
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/allClasses`)
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
                <h2 className="text-center text-3xl py-10">All Products</h2>
                <div className="">
                    <div className="flex flex-col gap-10">
                        {
                            allClasses.map((singleClass) => (
                                <SingleClass key={singleClass._id} singleClass={singleClass} />
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};


export default AllClasses;